const express = require('express');
const app = express();
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const artcilesController = require('./articles/ArticlesController')



//Configurando VIEW ENGINE
app.set('view engine', 'ejs');

//Config arquivos estáticos
app.use(express.static('public'))

//Config bady-parser
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//Conexão com o banco de dados
connection.authenticate()
.then(()=>{
    console.log('Conexão com BD feita com sucesso');
}).catch((error)=>{
    console.log(`Falha de conexão com o BD ${error}`)
});

//Config de Rotas com Router
app.use('/', categoriesController);
app.use('/',artcilesController);

//Config Geral de requisições

app.get('/', (req,res)=>{

    res.render('index');
});


app.listen(8080, ()=>{
    console.log('Servidor rodando')
});


