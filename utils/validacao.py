def validar_k_anonimato(df, coluna_contagem='n_usuarios', k=3):
    if df.empty or coluna_contagem not in df.columns:
        return df
    return df[df[coluna_contagem] >= k]