import express from 'express';
import { listarPosts } from '../controllers/posts-controller.js';

const routes = (app) => {
    // Habilita o middleware para analisar requisições com corpo no formato JSON
    app.use(express.json());

    // Endpoint para obter todos os posts
    app.get("/posts", listarPosts);
}

export default routes;