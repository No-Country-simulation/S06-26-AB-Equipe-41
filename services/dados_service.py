import os
import pandas as pd
from utils.validacao import validar_k_anonimato

class DadosService:
    def __init__(self):
        self.caminho_concentracao = os.path.join(os.path.dirname(__file__), '..', 'data', 'tensor_concetracao.csv')
    
    def obter_dados_regiao(self, regiao, indicador):
        if not os.path.exists(self.caminho_concentracao):
            return [], 0, 0
        
        chunks_filtrados = []
        for chunk in pd.read_csv(self.caminho_concentracao, chunksize=500000, dtype={"ecgi": str}):
            chunk.columns = chunk.columns.str.strip().str.lower()

            if regiao and regiao.upper() != 'BRASIL':
                chunk = chunk[chunk['municipio'].str.lower() == regiao.lower()]
            
            if not chunk.empty:
                chunks_filtrados.append(chunk)
        
        if not chunks_filtrados:
            return [], 0, 0
        
        df_final = pd.concat(chunks_filtrados, ignore_index=True)
        df_final = validar_k_anonimato(df_final, 'n_usuarios', k=3)

        if df_final.empty:
            return [], 0, 0
        
        coluna_valor = 'n_usuarios' if indicador == 'concentracao' else 'n_sessoes'
        valor_medio = df_final[coluna_valor].mean()
        congestionamento_real = df_final['congestionamento_medio'].mean() if 'congestionamento_medio' in df_final.columns else 0.0

        return df_final.head(15).to_dict(orient='records'), round(valor_medio, 2), round(congestionamento_real * 100, 1)