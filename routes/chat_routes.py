from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from services.ia_service import IAService
from utils.db_oracle import buscar_trajeto_assinante_sql

chat_bp = Blueprint('chat', __name__)
ia_service = IAService()

@chat_bp.route('/chat', methods=['POST'])
@jwt_required()
def post_chat():
    payload = request.get_json() or {}
    mensagem = payload.get('mensagem', '')
    assinante_id = payload.get('assinante_id')

    dados_contexto =[]
    if assinante_id or "assinante" in mensagem.lower():
        id_busca = assinante_id if assinante_id else 1234
        dados_contexto = buscar_trajeto_assinante_sql(id_busca)
    
    resposta_final, fontes_usadas = ia_service.processar_consulta_real(mensagem, dados_contexto)
    return jsonify({"resposta": resposta_final, "dados_usados": dados_contexto[:5],"fontes": fontes_usadas})