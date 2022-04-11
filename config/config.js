//setando para o mode de desenvolvimento
const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev' :
            return {
                dbString : 'mongodb+srv://thiago:root123@cluster0.yin34.mongodb.net/Cluster0?retryWrites=true&w=majority',
                jwtPass : 'senha_web_token',
                jwtExpires : '5d'
            }
        case 'hml' :
            return {
                dbString : 'mongodb+srv://thiago:root123@cluster0.yin34.mongodb.net/Cluster0?retryWrites=true&w=majority',
                jwtPass : 'senha_web_token',
                jwtExpires : '5d'
            }
        case 'prod' :
            return {
                dbString : 'mongodb+srv://thiago:root123@cluster0.yin34.mongodb.net/Cluster0?retryWrites=true&w=majority',
                jwtPass : 'senha_web_token',
                jwtExpires : '5d'
            }
    }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();