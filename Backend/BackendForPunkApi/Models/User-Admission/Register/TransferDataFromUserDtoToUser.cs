using PunkApiApp;

namespace BackendForPunkApi.Models.User_Admission.Login
{
    public static class TransferDataFromUserDtoToUser
    {
        public static User AssignDataToUser(User user, string username_, string email_, int phonenumber_, string gender_)
        {
            user.UserName = username_;
            user.EMail = email_;
            user.PhoneNumber = phonenumber_;
            user.Gender = gender_;

            return user;
        }
    }
}
