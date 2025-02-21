//realiza o processamento do conteudo no frontend assim que a pagina for carregada
window.onload = processarCarregamentoPagina;

document.addEventListener("DOMContentLoaded", function () {
  processarCarregamentoPagina();
});

function processarCarregamentoPagina() {
  // Aqui você pode carregar dados adicionais, como listas de pacientes ou doses, se necessário
}

//realiza o cadastro da imunização, executando a API no backend
async function realizarCadastroImunizacao(evento) {
  evento.preventDefault();

  // Obtém os valores dos campos do formulário
  const idPaciente = document.getElementById("idPaciente").value;
  const idDose = document.getElementById("idDose").value;
  const dataAplicacao = document.getElementById("dataAplicacao").value;
  const fabricante = document.getElementById("fabricante").value;
  const lote = document.getElementById("lote").value;
  const localAplicacao = document.getElementById("localAplicacao").value;
  const profissionalAplicador = document.getElementById("profissionalAplicador").value;

  // Constrói o objeto de imunização
  const imunizacao = {
    idPaciente: parseInt(idPaciente),
    idDose: parseInt(idDose),
    dataAplicacao: dataAplicacao,
    fabricante: fabricante,
    lote: lote,
    localAplicacao: localAplicacao,
    profissionalAplicador: profissionalAplicador,
  };

  try {
    // Realiza a chamada da API
    const httpResponse = await fetch("http://localhost:3000/imunizacao/inserir", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(imunizacao),
    });

    // Verifica se a resposta da API foi bem-sucedida
    if (!httpResponse.ok) {
      alert("Erro ao cadastrar: " + httpResponse.status + ", erro: " + httpResponse.statusText);
      return;
    }

    // Exibe mensagem de sucesso
    alert("Imunização cadastrada com sucesso!");
  } catch (error) {
    alert("Erro ao cadastrar: " + error.message);
  }
}

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
