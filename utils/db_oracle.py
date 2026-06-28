import os
import oracledb
from dotenv import load_dotenv

load_dotenv()

def obter_conexao_oracle():
    try:
        connection = oracledb.connect(
            user=os.getenv("ORACLE_USER"),
            password=os.getenv("ORACLE_PASSWORD"),
            dns=os.getenv("ORACLE_DNS")
        )
        return connection
    except Exception as e:
        print(f"Erro ao conectar no Oracle: {e}")
        return None

def buscar_trajeto_assinante_sql(assinante_hash, data_busca="2026-06-05"):
    conn = obter_conexao_oracle()
    if not conn:
        return []
    
    query = """
        SELECT seq_num, ecgi, cluster, arrival_time, permanencia_seg, distancia_km_anterior
        FROM tensor_sequencias
        WHERE assinante_hash = :assinante
            AND day_date = TO_DATE(:data_alvo, 'YYYY-MM-DD')
        ORDER BY seq_num
    """
    try:
        with conn.cursor() as cursor:
            cursor.execute(query, assinante=int(assinante_hash), data_alvo=data_busca)
            colunas = [col.lower() for col in cursor.description]
            cursor.rowfactory = lambda *args: dict(zip(colunas, args))
            return cursor.fetchall()
    except Exception as e:
        print(f"Erro na query SQL: {e}")
        return []
    finally:
        if conn:
            conn.close()