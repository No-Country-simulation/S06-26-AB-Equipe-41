import pandas as pd
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def carregar_csv_seguro(nome_arquivo, colunas_string):
    caminho = os.path.join(DATA_DIR, nome_arquivo)
    if not os.path.exists(caminho):
        return pd.DataFrame()
    
    dtypes = {col: str for col in colunas_string}
    df = pd.read_csv(caminho, dtype=dtypes)
    df.columns = df.columns.str.strip().str.lower()
    return df