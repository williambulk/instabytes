import fs from "fs";
import { getTodosPosts, criarPost } from '../models/posts-models.js';

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts do banco de dados (ou outra fonte)
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts em formato JSON
    res.status(200).json(posts);
}

// Função assíncrona para criar um novo post
export async function publicarPost(req, res) {
    // Obtém os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;

    try {
        // Chama a função para criar um novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Envia uma resposta HTTP com status 200 (OK) e o post criado em formato JSON
        res.status(200).json(postCriado);
    } catch(erro) {
        // Captura qualquer erro que possa ocorrer durante a criação do post
        console.error(erro.message);
        // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro genérica
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

// Função assíncrona para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
    // Cria um objeto com os dados do novo post, incluindo o nome do arquivo da imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        // Chama a função para criar um novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Gera um novo nome para o arquivo da imagem, utilizando o ID do post
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        
        // Renomeia o arquivo da imagem para o novo nome
        fs.renameSync(req.file.path, imagemAtualizada);
        
        // Envia uma resposta HTTP com status 200 (OK) e o post criado em formato JSON
        res.status(200).json(postCriado);
    } catch(erro) {
        // Captura qualquer erro que possa ocorrer durante o processo de upload e criação do post
        console.error(erro.message);
        // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro genérica
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}