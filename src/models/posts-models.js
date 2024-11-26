import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/db-config.js"; // Importa a função para conectar ao banco de dados

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Estabelece a conexão com o banco de dados MongoDB usando a string de conexão obtida da variável de ambiente.

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabyte"
    const db = conexao.db("imersao-instabyte"); // Obtém uma referência ao banco de dados específico.
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts"); // Obtém uma referência à coleção "posts" dentro do banco de dados.
    // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array
    return colecao.find().toArray(); // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados em um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabyte"); // Obtém uma referência ao banco de dados específico.
    const colecao = db.collection("posts"); // Obtém uma referência à coleção "posts" dentro do banco de dados.
    return colecao.insertOne(novoPost); // Insere um novo documento (o post) na coleção "posts".
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabyte"); // Obtém uma referência ao banco de dados específico.
    const colecao = db.collection("posts"); // Obtém uma referência à coleção "posts" dentro do banco de dados.
    const objID = ObjectId.createFromHexString(id); // Guardando neste objeto do Mongo o ID que recebemos
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost}); // Atualiza o post na coleção "posts".
}