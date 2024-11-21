import getTodosPosts from '../models/posts-models.js';

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts em formato JSON
    res.status(200).json(posts);
}