using CadastroContatos.Api.Context;
using CadastroContatos.Api.DTOs;
using CadastroContatos.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CadastroContatos.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/contatos")]
    public class ContatoController : Controller
    {
        private AppDbContext _context;

        public ContatoController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IEnumerable<Contato>> ObterContatos()
        {
            return await _context.Contatos
                .Where(x => x.UsuarioId == int.Parse(User.FindFirst("Id").Value))
                .ToListAsync();
        }


        [HttpGet("{contatoId}")]
        public async Task<Contato> ObterContatoPorId([FromRoute] int contatoId)
        {
            var contato = await _context.Contatos.FirstOrDefaultAsync(x => x.Id == contatoId);
            return contato;
        }


        [HttpPost]
        public async Task<object> CriarContato(ContatoCadastroDTO model)
        {
            try
            {
                await _context.Contatos.AddAsync(new Contato
                {
                    Email = model.Email,
                    Nome = model.Nome,
                    Telefone = model.Telefone,
                    UsuarioId = int.Parse(User.FindFirst("Id").Value),
                });
                await _context.SaveChangesAsync();

                return StatusCode(201);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = "Erro ao adicionar contato" });
            }
        }


        [HttpPut]
        public async Task<object> EditarContato(Contato model)
        {
            try
            {
                var contato = await _context.Contatos.FirstOrDefaultAsync(x => x.Id == model.Id);
                contato.Nome = model.Nome;
                contato.Email = model.Email;
                contato.Telefone = model.Telefone;

                _context.Contatos.Update(contato);
                await _context.SaveChangesAsync();

                return StatusCode(200);
            }
            catch (System.Exception)
            {
                return BadRequest(new { mensagem = "Erro ao atualizar contato" });
            }
        }


        [HttpDelete("{contatoId}")]
        public async Task<object> DeletaContato(int contatoId)
        {
            try
            {
                var contato = await _context.Contatos.FirstOrDefaultAsync(x => x.Id == contatoId);
                _context.Contatos.Remove(contato);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (System.Exception)
            {
                return BadRequest(new { mensagem = "Erro ao deletar contato" });
            }
        }
    }
}