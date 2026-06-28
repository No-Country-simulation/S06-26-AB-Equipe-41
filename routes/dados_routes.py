from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from services.dados_service import DadosService

dados_bp = Blueprint('dados', __name__)
dados_service = DadosService()

@dados_bp.route('/dados', methods=['POST'])
@jwt_required()
def post_dados():
    payload = request.get_json() or {}
    filtros = payload.get('filtros', {})
    regiao = filtros.get('regiao', 'Florianópolis')
    indicador = filtros.get('indicador', 'concentracao')

    dados_limpos, valor_medio, cong_medio = dados_service.obter_dados_regiao(regiao, indicador)

    return jsonify({
        "resposta_ia": f"Painel  v2 ativo para {regiao}. Volume medio: {valor_medio}.",
        "dados": dados_limpos,
        "indicador_congestionamento": cong_medio,
        "fontes": ["Visent CDRView", "tensor_concentracao.csv"]
    })