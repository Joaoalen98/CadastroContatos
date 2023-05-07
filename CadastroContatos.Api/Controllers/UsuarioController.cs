using CadastroContatos.Api.Context;
using CadastroContatos.Api.DTOs;
using CadastroContatos.Api.Helpers;
using CadastroContatos.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CadastroContatos.Api.Controllers
{
    [ApiController]
    [Route("api/usuarios")]
    public class UsuarioController : Controller
    {
        private AppDbContext _context;

        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }


        [HttpPost("login")]
        public async Task<object> Login([FromBody] LoginDTO model)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == model.Email);

            if (usuario == null)
            {
                return BadRequest(new { mensagem = "Email ou senha incorreta." });
            }

            bool senhaCorreta = HashHelper.ComparaSenha(model.Senha, usuario.Senha);

            if (!senhaCorreta)
            {
                return BadRequest(new { mensagem = "Email ou senha incorreta." });
            }

            var token = JwtHelper.GerarToken(usuario);

            usuario.Senha = null;
            return Ok(new { usuario, token });
        }


        [HttpPost("cadastro")]
        public async Task<object> Cadastro(UsuarioCadastroDTO model)
        {
            try
            {
                var usuarioExistente = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == model.Email);
                if (usuarioExistente != null)
                {
                    return BadRequest(new { mensagem = "Email já cadastrado" });
                }

                await _context.Usuarios.AddAsync(new Usuario
                {
                    Email = model.Email,
                    Nome = model.Nome,
                    Senha = HashHelper.HashSenha(model.Senha),
                });
                await _context.SaveChangesAsync();

                return StatusCode(201);
            }
            catch (System.Exception)
            {
                return StatusCode(500);
            }
        }


        [Authorize]
        [HttpGet("valida-token")]
        public async Task<object> ValidaToken()
        {
            var usuarioId = int.Parse(User.FindFirst("Id").Value);
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(x => x.Id == usuarioId);

            if (usuario == null)
            {
                return NotFound();
            }

            usuario.Senha = null;
            return Ok(usuario);
        }
    }
}