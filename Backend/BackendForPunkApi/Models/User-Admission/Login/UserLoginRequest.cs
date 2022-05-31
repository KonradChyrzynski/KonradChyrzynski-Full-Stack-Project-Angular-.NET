using PunkApiApp;
using System.ComponentModel.DataAnnotations;

namespace BackendForPunkApi.Models.User_Admission.Login
{
    public class UserLoginRequest
    {
        [Required(ErrorMessage = "Login is required")]
        public string LoginUserName { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string LoginPassword { get; set; }
    }
}
