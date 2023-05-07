using static BCrypt.Net.BCrypt;

namespace CadastroContatos.Api.Helpers
{
    public static class HashHelper
    {
        public static string HashSenha(string senha)
            => HashPassword(senha, GenerateSalt(8));


        public static bool ComparaSenha(string senha, string hash)
            => Verify(senha, hash);
    }
}