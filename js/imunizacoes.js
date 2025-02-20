// imunizacao.js
import { apiBase, utils } from "./api.js";

const ENDPOINT = "imunizacoes"; // Endpoint para estatísticas de imunização

export const imunizacaoModule = {
  async carregarEstatisticas(pacienteId) {
    try {
      console.log("Buscando estatísticas para o paciente ID:", pacienteId); // Teste

      // Filtra as imunizações pelo ID do paciente
      const imunizacoes = await apiBase.listar(
        `${ENDPOINT}?id_paciente=${pacienteId}`
      );
      console.log("Dados retornados:", imunizacoes); // Teste

      const estatisticas = {
        vacinasAplicadas: imunizacoes.length,
        vacinasProximoMes: this.calcularVacinasProximoMes(pacienteId),
        vacinasAtrasadas: this.calcularVacinasAtrasadas(pacienteId),
        vacinasIdade: this.calcularVacinasIdade(pacienteId),
        vacinasNaoAplicaveis: this.calcularVacinasNaoAplicaveis(pacienteId),
      };

      console.log("Estatísticas calculadas:", estatisticas); // Teste
      this.atualizarCards(estatisticas);
    } catch (error) {
      console.error("Erro ao carregar estatísticas:", error); // Teste
      utils.mostrarMensagem("Erro", error.message);
    }
  },

  calcularVacinasProximoMes(pacienteId) {
    // Lógica para calcular vacinas aplicáveis no próximo mês
    return 2; // Exemplo
  },

  calcularVacinasAtrasadas(pacienteId) {
    // Lógica para calcular vacinas atrasadas
    return 1; // Exemplo
  },

  calcularVacinasIdade(pacienteId) {
    // Lógica para calcular vacinas acima de uma determinada idade
    return 3; // Exemplo
  },

  calcularVacinasNaoAplicaveis(pacienteId) {
    // Lógica para calcular vacinas não aplicáveis
    return 0; // Exemplo
  },

  atualizarCards(estatisticas) {
    const aplicadas = document.getElementById("vacinas-aplicadas");
    const proximoMes = document.getElementById("vacinas-proximo-mes");
    const atrasadas = document.getElementById("vacinas-atrasadas");
    const idade = document.getElementById("vacinas-idade");
    const naoAplicaveis = document.getElementById("vacinas-nao-aplicaveis");

    console.log("Elementos dos cards:", {
      aplicadas,
      proximoMes,
      atrasadas,
      idade,
      naoAplicaveis,
    }); // Teste

    if (aplicadas && proximoMes && atrasadas && idade && naoAplicaveis) {
      aplicadas.textContent = estatisticas.vacinasAplicadas || 0;
      proximoMes.textContent = estatisticas.vacinasProximoMes || 0;
      atrasadas.textContent = estatisticas.vacinasAtrasadas || 0;
      idade.textContent = estatisticas.vacinasIdade || 0;
      naoAplicaveis.textContent = estatisticas.vacinasNaoAplicaveis || 0;
    } else {
      console.error("Um ou mais elementos dos cards não foram encontrados.");
    }
  },
};

// Inicialização do script
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-id-btn");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      console.log("Botão de busca clicado!"); // Teste
      const pacienteId = document.getElementById("search-id").value;
      if (pacienteId) {
        imunizacaoModule.carregarEstatisticas(pacienteId);
      } else {
        utils.mostrarMensagem("Erro", "Por favor, insira um ID de paciente.");
      }
    });
  }
});

window.imunizacaoModule = imunizacaoModule;
