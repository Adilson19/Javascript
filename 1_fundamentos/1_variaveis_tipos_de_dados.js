//  Variaveis
// 3 Formas de Criar Variaveis em JavaScript
// var, let, const

// Eh uma forma que salvamos valores na memoria

// Sintaxe: TIPO(var, let, const) NOME = VALOR;

// String = textos, '' ou ""

var nome = "Adelino Sousa"; // Variavel Global

console.log(nome);
console.log("Adelino Sousa");

// let -> substituir o valor da variavel
let idade =  25;

// A diferenca entre var e let eh o escopo, {}

nome = 'Sousa';
idade = 30;

console.log(nome, idade);

// Tanto var quanto let podem ser alteradas
// const -> constante, valor fixo, nao pode ser alterado
const pi = 3.14;

// padrao americano de numero 3,14 = 3.14
console.log(pi);

// var, let e const => let e const eh o que mais utilizaremos

// Tipos de dados

let numero = 41;
let numero2 = 41.5;

console.log(numero, numero2);
// JS nao ha diferenca entre inteiro e decimal

let umTexto = "Meu numero de telefone eh 922427380";