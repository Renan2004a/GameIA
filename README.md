# 🎮 GameIA

> Aplicação de Inteligência Artificial com RAG utilizando LLM local (LLaMA 3 via Ollama), focada em respostas inteligentes sobre jogos.


## 🚀 Sobre o projeto

O **GAMEAiA** é uma aplicação web desenvolvida com Flask que utiliza a técnica de **RAG (Retrieval-Augmented Generation)** para responder perguntas sobre jogos a partir de uma base de dados local.
O sistema combina busca por contexto com geração de linguagem natural, permitindo respostas mais precisas e contextualizadas.

## 🧠 Como funciona

O fluxo da aplicação:
Usuário → Interface Web → Flask → RAG → LLM (Ollama) → Resposta

### Etapas:

* 📚 Carregamento dos dados de jogos
* 🔎 Organização via vector store
* ❓ Recebimento da pergunta do usuário
* 🧩 Construção do prompt com contexto relevante
* 🤖 Geração da resposta com IA

## 🤖 IA Local (Ollama LLaMA 3)

Este projeto utiliza um modelo de linguagem executado localmente com o **Ollama**.

### 🔥 Vantagens:

* 🔒 Privacidade (sem uso de API externa)
* ⚡ Respostas rápidas
* 💰 Sem custo por requisição

### 📌 Modelo utilizado:


---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Renan2004a/GameIA.git
```

### 2. Entrar na pasta

```bash
cd GameIA
```

### 3. Criar ambiente virtual

```bash
python -m venv venv
```

### 4. Ativar ambiente

Windows:

```bash
venv\Scripts\activate
```

Linux/Mac:

```bash
source venv/bin/activate
```

### 5. Instalar dependências

```bash
pip install -r requirements.txt
```

### 6. Rodar o projeto

```bash
python app.py
```

Acesse:
👉 http://127.0.0.1:5000

---

## 🧠 Como rodar o modelo (Ollama)

### 1. Instalar Ollama

https://ollama.com

### 2. Baixar o modelo

```bash
ollama pull llama3
```

### 3. Executar

```bash
ollama run llama3
```

---

## 🛠️ Tecnologias utilizadas

* Python
* Flask
* RAG (Vector Store + LLM)
* Ollama
* HTML, CSS, JavaScript

---

## 📂 Estrutura do projeto

```
GameIA/
├── app.py
├── data/
│   └── games.txt
├── rag/
│   ├── llm.py
│   └── vectorstore.py
├── static/
├── templates/
├── requirements.txt
└── README.md
```

---

## 📌 Funcionalidades

* 💬 Sistema de perguntas e respostas
* 🧠 Uso de IA com contexto (RAG)
* ⚡ Execução com modelo local
* 🌐 Interface web simples

---

## 🚧 Melhorias futuras

* 🔍 Busca semântica com embeddings reais
* 🎮 Expansão da base de dados
* 🌐 Deploy online
* 🧠 Otimização do pipeline de IA

---

## 👨‍💻 Autor

**Renan Alves Tavares**

