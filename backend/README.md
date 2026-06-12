# Backend App Bit - Equipe 41

## Semana 0 - Setup Inicial | Diomara

### O que esse código faz hoje
Servidor básico em Flask. Tem só 1 rota `GET /` que returna uma frase.
Serve para provar que o ambiente Python + Flask está funcionando.

### Como rodar na tua máquina - PASSO A PASSO

**Passo 1: Baixar o código**

Se ainda não tem o projeto:
    bash
git clone https://github.com/No-Country-simulation/S06-26-AB-Equipe-41.git
cd S06-26-AB-Equipe-41/backend
git checkout backend-diomara

Ou:

1. Vá até o repositório
2. Clique no main, selecione backend-diomara
3. Entre no app.py e cópie o código
4. Abra o VScode cole o código, e abra o terminal

**Passo 2: Instalar o Flask**

No mesmo terminal digite:

py -m pip install flask

**Passo 3: Ligar o servidor**

Ainda no terminal degite: 

py app.py

O terminal irá retornar :

Running on http://127.0.0.1:5000
Deixa rodando.

**Passo 4: Testar no navegador**

1. Abre o Chrome ou o seu navegador
2. Degite na barra de endereço: http://localhost:5000 ou o endereço mostrado no terminal anteriormente
3. Aperta Enter

Resultado esperado: Backend da Diomara funcionando!
