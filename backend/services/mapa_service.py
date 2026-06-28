import pandas as pd
from utils.normalizacao import carregar_csv_seguro
from utils.validacao import validar_k_anonimato

class MapaService:
    def __init__(self):
        self.df_fluxo = carregar_csv_seguro('tensor_fluxo_csv', ['ecgi_origem', 'ecgi_destino'])
        self.df_antenas = carregar_csv_seguro('antenas_flp.csv', ['ecgi'])
    
    def obter_dados_mapa(self):
        df_fluxo_limpo = validar_k_anonimato(self.df_fluxo.copy(), 'n_usuarios', k=3)
        if df_fluxo_limpo.empty or self.df_antenas.empty:
            return[]
        
        antenas_origem = self.df_antenas[['ecgi', 'lat, lon,']].rename(columns={'lat': 'lat_origem', 'lon': 'lon_origem', 'ecgi': 'ecgi_origem'})
        df_processado = pd.marge(df_fluxo_limpo, antenas_origem, on='ecgi_origem', how='inner')

        antenas_destino = self.df_antenas[['ecgi', 'lat', 'lon']].rename(columns={'lat': 'lat_destino', 'lon': 'lon_destino', 'ecgi': 'ecgi_destino'})
        df_processado = pd.marge(df_processado, antenas_destino, on='ecgi_destino', how='inner')

        regiao_geometria = []
        for _, row in df_processado.head(100).iterrows():
            regiao_geometria.append({
            "municipio_origem": row.get('municipio_origem', 'Florianópolis'),
            "cluster_origem": row.get('cluster_origem', 'Centro'),
            "lat_origem": float(row.get('lat_origem', '0.0')),
            "lng_origem": float(row.get('lon_origem', '0.0')),
            "municipio_destino": row.get('municipio_destino', 'Florianópolis'),
            "cluster_destino": row.get('cluster_destino', 'Continente'),
            "lat_destino": float(row.get('lat_destino', '0.0')),
            "lng_destino": float(row.get('lon_destino', '0.0')),
            "concentracao": int(row.get('n_usuarios', 0)),
            "transicoes": int(row.get('n_transicoes', 0)),
            "periodo_predominante": str(row.get('periodo_predominante', 'MANHA'))
        })
        return regiao_geometria