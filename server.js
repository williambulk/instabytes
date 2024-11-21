import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Paisagem montanhosa",
        imagem: "https://picsum.photos/seed/picsum/300/150",
    },
    {
        id: 3,
        descricao: "Cachorro brincando no parque",
        imagem: "https://placeholders.net/300x150/random/dog",
    },
    {
        id: 4,
        descricao: "Gato dormindo",
        imagem: "https://placekitten.com/300/200",
    },
    {
        id: 5,
        descricao: "Comida deliciosa",
        imagem: "https://loremflickr.com/300/200/food",
    },
    {
        id: 6,
        descricao: "Cidades noturnas",
        imagem: "https://source.unsplash.com/300x200/?city,night",
    },
];

const app = express();
app.use(express.json()); // declarando para o Express que usarei JSON

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts); // trocado de "send" para "json" já que vamos retornar o objeto
});

// função para encontrar a index dos posts via id
function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
} 

app.get("/posts/:id", (req, res) => { // usando :id no endpoint para retornar apenas 1 item
    const index = buscarPostPorID(req.params.id); // variável para retornar o post pelo ID usando a propriedade req.params
    res.status(200).json(posts[index]); // retornando o post com a index
});