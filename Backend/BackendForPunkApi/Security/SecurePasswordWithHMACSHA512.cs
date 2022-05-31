namespace BackendForPunkApi.Controllers
{
    public class SecurePasswordWithHMACSHA512
    {
        private byte[] passwordSalt;
        private byte[] passwordHash;

        public SecurePasswordWithHMACSHA512(string password)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        public byte[] GetPasswordHash()
        {
            return passwordHash;
        }
        public byte[] GetPasswordSalt()
        {
            return passwordSalt;
        }
    }
}