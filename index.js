import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));    
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => trataErro(erro))    
}

pegaArquivo('./arquivos//texto1.md');
