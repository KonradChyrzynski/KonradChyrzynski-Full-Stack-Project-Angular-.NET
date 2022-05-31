using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendForPunkApi;
using BackendForPunkApi.Data;

namespace PunkApiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfilesController : ControllerBase
{
        private readonly PunkDbContext _context;

        public UserProfilesController(PunkDbContext context)
        {
            _context = context;
        }

        // GET: api/UserProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUserProfile()
        {
            return await _context.User.ToListAsync();
        }
    }
}