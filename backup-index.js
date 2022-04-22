/*import chalk from 'chalk'; //importação da lib chalk
import fs from 'node:fs';
const chalk = require('chalk');
const fs = require('fs'); //não é preciso instalar pois ela é nativa do Node.

function tratarErro(erro) { //throw é "jogar" o erro fora
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho...')); //Error é um objeto nativo do node.
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf - 8';    
    fs.promises //promisses = Avisa ao código "fs" leve o tempo que for para ler o arquivo e espera isso acontecer e só depois chamar a função correspondente.
    //funções encadeadas
    .readFile(caminhoDoArquivo, encoding) 
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => tratarErro(erro))    
}
/*
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';                       // => Arror Functions
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            tratarErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/

//pegaArquivo('./arquivos/texto1.md');


//código sincrono = Código que roda em tempo real (bate e volta)
//código asincrono = Mensagem vai e não necesssáriamente tenha de voltar em tempo real. 







