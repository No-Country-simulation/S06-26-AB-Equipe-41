import requests
import os
from dotenv import load_dotenv

load_dotenv()

class IAService:
    def __init__(self):
        self.n8n_url = os.getenv("N8N_WEBHOOK_URL")
    
    def processar_consulta_real(self, pergunta, dadod_contexto):
        fontes = ["Visent CDRView - Anatel"]
        payload = {"pergunta": pergunta, "dados": dadod_contexto[:5]}
        try:
            resposta_n8n = requests.post(self.n8n_url, json=payload, timeout=30)
            if resposta_n8n.status_code == 200:
                texto_retorno = resposta_n8n.json().get("resposta_ia", "Processado.")
            else:
                texto_retorno = "O servidor do n8n respondeu com erro."
        except Exception as e:
            texto_retorno = f"Sem conexão com a IA: {e}"
        return texto_retorno, fontes