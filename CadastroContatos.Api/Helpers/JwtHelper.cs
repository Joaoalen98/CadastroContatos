using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CadastroContatos.Api.Models;
using Microsoft.IdentityModel.Tokens;

namespace CadastroContatos.Api.Helpers
{
    public static class JwtHelper
    {
        public static string Key = "r82u9ru3827r893r4u3ijeoifjeij34";

        public static string GerarToken(Usuario usuario)
        {
            var bytesKey = Encoding.ASCII.GetBytes(Key);

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(bytesKey), SecurityAlgorithms.HmacSha256),
                Expires = DateTime.Now.AddDays(1),
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, usuario.Nome),
                    new Claim(ClaimTypes.Email, usuario.Email),
                    new Claim("Id", usuario.Id.ToString()),
                }),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}