# Gerenciador de Vacinas - Hackathon 2025 | 1000Devs

Este repositório contém o frontend do **Gerenciador de Vacinas**, um projeto desenvolvido para o Hackathon 2025 do programa **1000Devs**, promovido pela Mesttra em parceria com a Johnson & Johnson e o Hospital Israelita Albert Einstein.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript e Bootstrap.
- **Dados:** JSON Server (Simulação de API REST).


## 🚀 Funcionalidades Principais
- **Cadastro de Pacientes:** Adicionar, alterar, excluir e consultar pacientes.
- **Registro de Imunizações:** Registrar vacinas aplicadas com detalhes como data, dose, fabricante e local.
- **Consulta de Calendário Vacinal:** Visualizar vacinas recomendadas por faixa etária.
- **Estatísticas:** Obter informações sobre vacinas aplicadas, atrasadas e próximas doses.

## 🖥️ Como Baixar e Executar o Projeto Frontend

### 📌 Requisitos
Antes de rodar o projeto, certifique-se de ter os seguintes requisitos instalados:
- **IDE**: Visual Studio Code
- **Extensão Live Server**
- **Git**

### 📥 1. Clonar o Repositório
```bash
# Clone o repositório do frontend
git clone https://github.com/ViniciusBorgesdeAraujo/frontend-gerenciador-vacinas.git

# Acesse o diretório do projeto
cd frontend-gerenciador-vacinas
```

### 🚀 2. Executar o Projeto
1. Abra o **index.html** no Visual Studio Code.
2. Inicie o **Live Server**.
3. Acesse a aplicação no navegador pelo endereço:
   ```
   http://127.0.0.1:5500/index.html
   ```

### 📜 Exemplo de Resposta JSON

#### ✅ Cadastro de Paciente
**Requisição**
```json
{
  "nome": "Fulano de Tal",
  "cpf": "111.111.111-11",
  "sexo": "M",
  "dataNascimento": "2018-10-10"
}
```
**Resposta**
```json
{
  "id": 1,
  "mensagem": "Paciente cadastrado com sucesso."
}
```

#### ✅ Consulta de Imunizações por Paciente
**Resposta**
```json
[
  {
    "id": 1,
    "paciente": "Fulano de Tal",
    "vacina": "BCG",
    "dose": "Dose Única",
    "dataAplicacao": "2018-10-11",
    "fabricante": "Fiocruz",
    "lote": "0644",
    "local": "Hospital Santa Fé",
    "profissional": "Beltrano de Tal"
  }
]
```

## 📜 Sobre o Programa
Este projeto foi desenvolvido durante o programa **1000Devs**, promovido pela **Mesttra**, em parceria com a **Johnson & Johnson** e o **Hospital Israelita Albert Einstein**.

