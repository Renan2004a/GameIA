from flask import Flask, render_template, request, jsonify
from rag.vectorstore import create_vectorstore
from rag.llm import gerar_resposta

app = Flask(__name__)

index, docs = create_vectorstore()
print("Vectorstore carregado com", len(docs), "documentos")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    question = data["question"]

    prompt = f"""
Use o contexto abaixo para responder a pergunta.

Contexto:
{chr(10).join(docs)}

Pergunta:
{question}
    """

    resposta = gerar_resposta(prompt)

    return jsonify({"answer": resposta})

if __name__ == "__main__":
    app.run(debug=True)