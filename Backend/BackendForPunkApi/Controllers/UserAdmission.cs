using BackendForPunkApi.Data;
using BackendForPunkApi.Models.User_Admission;
using BackendForPunkApi.Models.User_Admission.Login;
using BackendForPunkApi.Security.Jwt;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PunkApiApp;
using PunkApiApp.Controllers;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;

namespace BackendForPunkApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAdmission : ControllerBase
    {
        private readonly PunkDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly UserProfilesController _userProfilesController;

        public UserAdmission(PunkDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetUser")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserProfile()
        {
            return await _context.User.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<User>> Register(UserRegisterDto model)
        {
            User user = new User();
            User AssignUser = TransferDataFromUserDtoToUser.AssignDataToUser(user, model.UserName,model.EMail,model.PhoneNumber,model.Gender);

            SecurePasswordWithHMACSHA512 ComputedPassword =  new SecurePasswordWithHMACSHA512(model.Password);

            AssignUser.PasswordSalt = ComputedPassword.GetPasswordSalt();
            AssignUser.PasswordHash = ComputedPassword.GetPasswordHash();

            AssignUser.UserName = model.UserName;

            _context.User.Add(AssignUser); 

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserProfile", new { id = AssignUser.UserId }, AssignUser);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserLoginResponse>> Login(UserLoginRequest user)
        {
            var UserData = await _context.User.Where(u => u.UserName == user.LoginUserName).FirstOrDefaultAsync();

            if(UserData != null)
            {

                bool CheckPasswordHash = VerifyPasswordHash(user.LoginPassword, UserData.PasswordHash, UserData.PasswordSalt);

                var refreshToken = GenerateRefreshToken();

                SetRefreshToken(refreshToken, UserData);

                if (CheckPasswordHash == true)
                {
                    return CreatedAtAction("GetUserProfile", new { id = UserData.UserId }, UserData);
                }
                else
                {
                    return NotFound();
                }

            }
            throw new Exception("User not found");
        }

        private RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };

            return refreshToken;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                return computedHash.SequenceEqual(passwordHash);
            }
        }

        private string CreateToken(User user)
        {

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private void SetRefreshToken(RefreshToken newRefreshToken, User user)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };

            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);

            user.RefreshToken = newRefreshToken.Token;
            user.TokenCreated = newRefreshToken.Created;
            user.TokenExpires = newRefreshToken.Expires;
        }


    }
}
