# 📡 Backend Antenas Brasil - Equipe 41

**Projeto:** Antenas Brasil - NoCountry Simulação S06-26-AB  
**Squad:** Equipe 41  
**Responsável Backend:** Diomara - Mara06-7  
**Branch:** `backend-diomara`

> ⚠️ **AVISO SPRINT 1**  
> A rota `/dados` utiliza **dados 100% mockados e fictícios** apenas para validação da API.  
> **Não há conexão com dados reais do CDRView ou arquivo `antenas_flp.csv` nesta Sprint.**  
> Integração com dados reais prevista para Sprint 2.

---

## 🚀 Semana 1 - Sprint 1 | Diomara - CONCLUÍDA ✅

### **O que foi entregue na S1**
Servidor Flask com 2 endpoints funcionais:

| Endpoint | Método | Descrição | Status |
| --- | --- | --- | --- |
| `/` | `GET` | Healthcheck. Retorna status do servidor. | ✅ Funcionando |
| `/dados` | `POST` | Retorna JSON **mockado** para teste inicial do frontend. | ✅ Funcionando |

**Exemplo de resposta `/dados` - DADOS FICTÍCIOS:**
```json
{
  "regiao": "Centro",
  "indicador": "emprego", 
  "valor": "85",
  "unidade": "%"
}
```

### **Como rodar na tua máquina**

**Passo 1: Baixar o código**
```bash
git clone https://github.com/No-Country-simulation/S06-26-AB-Equipe-41.git
cd S06-26-AB-Equipe-41/backend
git checkout backend-diomara
```

**Passo 2: Criar ambiente virtual e instalar Flask**
```bash
py -m venv .venv
.venv\Scripts\activate
pip install flask
```

**Passo 3: Ligar o servidor**
```bash
py app.py
```
Terminal irá retornar: `Running on http://127.0.0.1:5000`

**Passo 4: Testar os endpoints**
1. **GET `/`** no navegador: `http://localhost:5000/`
2. **POST `/dados`** no Thunder Client: Status `200 OK` + JSON

---

## 📋 Semana 0 - Setup Inicial | Diomara

### **O que esse código fazia**
Servidor básico em Flask com 1 rota `GET /` que retorna uma frase.

Servia para provar que o ambiente Python + Flask estava funcionando.

---

## 🛠️ Stack Utilizada
- Python 3.11
- Flask 3.0
- Git + GitHub

---
**Desenvolvido por Diomara - Backend Team | NoCountry S13**  
**S1:** Estrutura da API validada com dados fictícios para teste.
