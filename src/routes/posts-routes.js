import express from 'express';
import multer from 'multer';
import { listarPosts, publicarPost, uploadImagem } from '../controllers/posts-controller.js';

// Definição de nome do arquivo para Windows
const storage = multer.diskStorage({
    // Define o diretório de destino para salvar os arquivos
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define a pasta "uploads" como destino
    },
    // Define o nome do arquivo
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Utiliza o nome original do arquivo
    }
});

// Configura o middleware multer para lidar com uploads de arquivos
const upload = multer({ dest: "./uploads" , storage });

const routes = (app) => {
    // Habilita o middleware para analisar requisições com corpo no formato JSON
    app.use(express.json()); // Permite que a aplicação entenda dados enviados no corpo da requisição em formato JSON

    // Endpoint para obter todos os posts
    app.get("/posts", listarPosts); // Rota GET para a URL /posts, que chama a função listarPosts para obter todos os posts

    // Rota para criar um novo post
    app.post("/posts", publicarPost); // Rota POST para a URL /posts, que chama a função publicarPost para criar um novo post

    // Rota para subir a imagem
    app.post("/upload", upload.single("imagem"), uploadImagem); // Rota POST para a URL /upload, que utiliza o middleware multer para lidar com o upload de um único arquivo chamado "imagem" e chama a função uploadImagem
}

export default routes;