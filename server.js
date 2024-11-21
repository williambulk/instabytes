import express from "express";
import routes from "./src/routes/posts-routes.js";

// Cria uma instância do Express para iniciar a aplicação
const app = express();

// Executando a função routes passando o app
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
});