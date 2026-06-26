from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
import os
from dotenv import load_dotenv

from routes.dados_routes import dados_bp
from routes.mapa_routes import mapa_bp
from routes.chat_routes import chat_bp

load_dotenv()

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "chave-mestra-reserva")
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
def login():
    payload = request.get_json() or {}
    usuario = payload.get("usuario")
    senha = payload.get("senha")

    if usuario == "gestor_flp" and senha == "Admin@BiT2026":
        token_acesso = create_access_token(identity=usuario)
        return jsonify({"token": token_acesso}), 200
    
    return jsonify({"erro": "Acesso negado. Credenciais inválidas."}), 401

app.register_blueprint(dados_bp)
app.register_blueprint(mapa_bp)
app.register_blueprint(chat_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)