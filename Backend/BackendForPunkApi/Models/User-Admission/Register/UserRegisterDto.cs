namespace BackendForPunkApi.Models.User_Admission
{
    public class UserRegisterDto
    {
        public string UserName { get; set; } = String.Empty;
        public string EMail { get; set; } = String.Empty;
        public int PhoneNumber { get; set; }
        public string Gender { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
    }
}
