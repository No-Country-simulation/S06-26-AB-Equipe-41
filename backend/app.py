from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
	return "Backend da Diomara funcionando!"

@app.route('/dados', methods=['POST'])
def dados():
	dados_mockados = {
		"regiao": "Centro",
		"indicador": "emprego",
		"valor": "85",
		"unidade": "%"
	}
	return jsonify(dados_mockados)

if __name__ == '__main__':
	app.run()