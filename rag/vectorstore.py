from sentence_transformers import SentenceTransformer
import faiss

model = SentenceTransformer("all-MiniLM-L6-v2")

def load_documents(path="data/games.txt"):
    with open(path, "r", encoding="utf-8") as f:
        return f.read().split("\n")

def create_vectorstore():
    docs = load_documents()
    embeddings = model.encode(docs)

    index = faiss.IndexFlatL2(len(embeddings[0]))
    index.add(embeddings)

    return index, docs