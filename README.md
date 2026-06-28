# 📊 App BIT — Painel de Dados Públicos (B2G)
### 📍 Inteligência Territorial e Inclusão Digital na Região Metropolitana de Florianópolis (Dataset v2)

Bem-vindo ao repositório oficial do backend do **App BIT**. Este sistema é uma plataforma de inteligência governamental (B2G) projetada para subsidiar formulações de políticas públicas de **Saúde Mental** e **Empregabilidade** através da análise massiva de dados de mobilidade urbana e infraestrutura de telecomunicações baseados no dataset **Visent CDRView (Junho/2026)**.

---

## 🚀 Funcionalidades Principais (MVP v2)

*   **🔒 Segurança Robusta (JWT):** Controle de acesso estrito para gestores públicos através de tokens de autenticação por login, impedindo o acesso não autorizado a dados públicos territoriais.
*   **📈 Processamento Massivo em Chunks:** Algoritmos otimizados em Pandas para ler matrizes de dados de múltiplos Gigabytes (como o arquivo principal de 12 milhões de linhas) em blocos de 500.000 registros sem estourar a memória RAM do servidor.
*   **⚖️ Conformidade Legal (LGPD):** Aplicação estrita da regra de **K-Anonimato (K=3)** para garantir o anonimato absoluto e a privacidade dos cidadãos de Santa Catarina.
*   **🗺️ Geometria Combinada para Mapas:** Mecanismo inteligente que cruza a tabela de fluxos de tráfego com o cadastro físico de antenas, entregando coordenadas exatas (`lat_origem`, `lng_origem`, `lat_destino`, `lng_destino`) prontas para plotagem vetorial no Front-end.
*   **💬 Agente de IA em Linguagem Natural:** Integração avançada via n8n e Cohere (Command-R) para traduzir dados técnicos de congestionamento e densidade celular em relatórios e insights sociais para o gestor público.

---

## 📁 Estrutura Organizacional do Projeto

O projeto adota os princípios de **Arquitetura Limpa (Clean Architecture)** para garantir manutenibilidade e divisão clara de responsabilidades:

```text
wongola-bit-appbit/
├── data/               # 📂 Planilhas brutas do dataset Visent CDRView v2 (Excluídas do Git)
│   ├── antenas_flp.csv
│   ├── tensor_concentracao.csv
│   └── tensor_fluxo_vias.csv
├── routes/             # 🛎️ Portas de entrada (Endpoints HTTP Flask e validação de tokens)
│   ├── chat_routes.py
│   ├── dados_routes.py
│   └── mapa_routes.py
├── services/           # 🧑‍🍳 Motores de regras de negócio, cálculos de médias e IA
│   ├── dados_service.py
│   ├── ia_service.py
│   └── mapa_service.py
├── utils/              # 🛠️ Utensílios de suporte (LGPD, tratamento de IDs e SQL)
│   ├── db_oracle.py
│   ├── normalizacao.py
│   └── validacao.py
├── .env                # 🔑 Cofre de variáveis de ambiente e senhas confidenciais
├── .gitignore          # 🚫 Filtro de segurança para não expor dados sensíveis
├── app.py              # 🎛️ Inicializador global do servidor Flask e segurança JWT
├── Procfile            # 🚂 Comando de inicialização profissional para o Railway
├── queries.sql         # 📊 Scripts de consultas analíticas para Banco Oracle Real
├── requirements.txt    # 📦 Lista de bibliotecas que o servidor precisa baixar
└── test_api.py         # 🏃‍♂️ Script de testes automatizados de ponta a ponta
```

---

## 🛠️ Pré-requisitos e Como Instalar (Do Zero)

### 1. Instalar o Python
Certifique-se de ter o Python 3.10 ou superior instalado em sua máquina. **Nota importante:** Marque a opção *"Add Python to PATH"* durante a instalação.

### 2. Clonar o projeto e instalar dependências
Abra o seu terminal na pasta do projeto e instale todos os pacotes necessários executando:
```bash
pip install flask pandas openai python-dotenv flask-jwt-extended oracledb requests gunicorn
```

### 3. Preparar a base de dados (`data/`)
Baixe os arquivos oficiais da Versão 2 do dataset **Visent CDRView** da Região Metropolitana de Florianópolis e coloque-os dentro da pasta `data/` com os seguintes nomes exatos em letras minúsculas:
*   `antenas_flp.csv` (Cadastro geodésico físico de torres)
*   `tensor_concentracao.csv` (Indicadores de densidade e congestionamento de rede)
*   `tensor_fluxo_vias.csv` (Matriz de tráfego agregado e transições de rotas)

### 4. Configurar as chaves secretas (`.env`)
Crie um arquivo chamado `.env` na raiz do projeto e preencha com as suas chaves reais:
```text
JWT_SECRET_KEY=sua-chave-secreta-jwt-de-florianopolis-2026
ORACLE_USER=seu_usuario_oracle
ORACLE_PASSWORD=sua_senha_oracle
ORACLE_DSN=seu_host_oracle:1521/seu_servico
N8N_WEBHOOK_URL=https://railway.app
```

---

## ⚙️ Integração Tecnológica de IA (n8n + Cohere)

A inteligência de linguagem natural do painel funciona através de um fluxo assíncrono:
1. O **Flask** intercepta a pergunta do gestor no endpoint `/chat` e envia um pacote via HTTP POST para o **n8n**.
2. O **n8n** atua como o encanamento orquestrador na nuvem **Railway**, coletando os dados de tráfego injetados e disparando o modelo LLM **Cohere (Command-R)**.
3. O **Cohere** processa os indicadores de tráfego, as carências de rede móvel (`drop_pct_medio` e `congestionamento_medio`) e emite o parecer social final em português simples e direto de volta para a interface do usuário.

---

## 🏃‍♂️ Como Executar e Testar o Sistema

1. **Ligar o Servidor Backend Local:**
   No seu terminal principal do VS Code, execute o comando:
   ```bash
   python app.py
   ```
   O servidor Flask iniciará localmente na porta `http://127.0.0.1:5000`.

2. **Executar os Testes Automatizados Integrados:**
   Abra um segundo terminal no seu computador e execute:
   ```bash
   python test_api.py
   ```
   O script realizará o fluxo completo: simulação de login de gestor público, captura do crachá de segurança (Token JWT), extração de coordenadas para o mapa combinando origens/destinos e consulta de dados socioeconômicos via Inteligência Artificial.

---

## 🔒 Governança de Dados e Conformidade (LGPD)

Em estrita conformidade com a Legislação Brasileira de Proteção de Dados (Art. 12 da Lei nº 13.709/2018):
*   Nenhum dado de identificação pessoal (PII) trafega no ecossistema. Dispositivos e assinantes são indexados por códigos restritos gerados via `assinante_hash`.
*   **Aviso Crítico de Schema:** As colunas `ecgi`, `ecgi_origem` e `ecgi_destino` são tratadas estritamente como strings no carregamento. Isso impede que o Pandas as leia como número (`float64`), o que eliminaria os zeros à esquerda e corromperia a indexação das antenas.
*   A função `validar_k_anonimato` intercepta todos os retornos analíticos do mapa e dos dados. Agrupamentos geográficos ou de deslocamento contendo amostras menores que 3 usuários ativos ($K=3$) são automaticamente expurgados pelo backend, inviabilizando qualquer tentativa de reidentificação ou engenharia reversa comportamental.

---
⭐ *Desenvolvido pela equipe App BIT - 41 como solução inovadora em infraestrutura GovTech e análise de Big Data.*
