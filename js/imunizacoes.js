// imunizacao.js
import { apiBase, utils } from "./api.js";

const ENDPOINT = "imunizacoes/paciente/"; // Endpoint para consultar imunizações por paciente

export const imunizacaoModule = {
  async carregarImunizacoes(pacienteId) {
    try {
      console.log("Buscando imunizações para o paciente ID:", pacienteId);

      // Filtra as imunizações pelo ID do paciente
      const imunizacoes = await apiBase.listar(`${ENDPOINT}${pacienteId}`);
      console.log("Dados retornados:", imunizacoes);

      this.atualizarTabela(imunizacoes); // Atualiza a tabela com os dados das imunizações
    } catch (error) {
      console.error("Erro ao carregar imunizações:", error);
      utils.mostrarMensagem("Erro", error.message);
    }
  },

  atualizarTabela(imunizacoes) {
    const tabela = document.getElementById("tabela-imunizacoes");
    if (tabela) {
      tabela.innerHTML = imunizacoes
        .map(
          (imunizacao) => `
          <tr>
            <td>${imunizacao.id}</td>
            <td>${imunizacao.nomePaciente}</td>
            <td>${imunizacao.nomeVacina}</td>
            <td>${imunizacao.nomeDose}</td>
            <td>${imunizacao.dataAplicacao}</td>
            <td>${imunizacao.fabricante}</td>
            <td>${imunizacao.lote}</td>
            <td>${imunizacao.localAplicacao}</td>
            <td>${imunizacao.profissionalAplicador}</td>
          </tr>
        `
        )
        .join("");
    } else {
      console.error("Tabela de imunizações não encontrada.");
    }
  },
};

// Inicialização do script
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-id-btn");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      console.log("Botão de busca clicado!");
      const pacienteId = document.getElementById("search-id").value;
      if (pacienteId) {
        imunizacaoModule.carregarImunizacoes(pacienteId);
      } else {
        utils.mostrarMensagem("Erro", "Por favor, insira um ID de paciente.");
      }
    });
  }
});

window.imunizacaoModule = imunizacaoModule;
