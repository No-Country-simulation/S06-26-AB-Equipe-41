SELECT ecgi_origem, cluster_origem, ecgi_destino, cluster_destino, n_usuarios, n_transicoes
FROM tensor_fluxo_vias
ORDER BY  n_usuarios DESC
FETCH FIRST 20 ROWS ONLY;

SELECT seq_num, ecgi, cluster, arrival_time, permanencia_seg
FROM tensor_sequencias
WHERE assinante_hash = 1234 AND  day_date = DATE '2026-06-05'
ORDER BY seq_num