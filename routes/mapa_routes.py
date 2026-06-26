from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from services.mapa_service import MapaService

mapa_bp = Blueprint('mapa', __name__)
mapa_service = MapaService()

@mapa_bp.route('/mapa', methods=['GET'])
@jwt_required()
def get_mapa():
    regioes = mapa_service.obter_dados_mapa()
    return jsonify({"regioes": regioes})