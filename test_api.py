import requests
import json

BASE_URL = "http://127.0.0.1:5000"

def rodar_testes_integrados():
    print("Iniciando testes do  Backend...")
    res_login = requests.post(f"{BASE_URL}/login", json={"usuario": "gestor_flp", "senha": "Admin@BiT2026"})
    if res_login.status_code != 200:
        print("Falha no Login!")
        return
    token = res_login.json().get("token")
    headers = {"Authorization": f"Bearer {token}"}
    print("Login OK! Token JWT gerado.")

    res_mapa = requests.get(f"{BASE_URL}/mapa", headers=headers)
    print(f"Status Rota Mapa: {res_mapa.status_code}")

    res_chat = requests.post(f"{BASE_URL}/chat", json={"mensagem": "Quais areas com rede precaria?"}, headers=headers)
    print(f"Status Rota Chat IA: {res_chat.status_code}")

if __name__ == "__main__":
    rodar_testes_integrados()