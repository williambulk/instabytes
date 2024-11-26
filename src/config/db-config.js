import { MongoClient } from 'mongodb';
// Importa o módulo MongoClient da biblioteca MongoDB para criar conexões com bancos de dados MongoDB.

export default async function conectarAoBanco(stringConexao) {
    // Define uma função assíncrona para conectar ao banco de dados.
    // Recebe a string de conexão como parâmetro.
    let mongoClient;
    // Declara uma variável para armazenar a instância do cliente MongoDB.

    try {
        // Bloco try para capturar possíveis erros durante a conexão.
        mongoClient = new MongoClient(stringConexao);
        // Cria uma nova instância do cliente MongoDB usando a string de conexão fornecida.
        console.log('Conectando ao clustar do banco de dados...');
        // Exibe uma mensagem no console indicando que a conexão está sendo estabelecida.
        await mongoClient.connect();
        // Espera a conexão ser estabelecida de forma assíncrona.
        console.log('Conectado ao MongoDB Atlas com sucesso!');
        // Exibe uma mensagem de sucesso após a conexão ser estabelecida.

        return mongoClient;
        // Retorna a instância do cliente MongoDB para que possa ser utilizada em outras partes do código.

    } catch (erro) {
        // Captura qualquer erro que ocorra durante o processo de conexão.
        console.error('Falha na conexão com o banco!', erro);
        // Exibe uma mensagem de erro no console, junto com o erro ocorrido.
        process.exit();
        // Encerra a aplicação caso a conexão falhe.
    }
}