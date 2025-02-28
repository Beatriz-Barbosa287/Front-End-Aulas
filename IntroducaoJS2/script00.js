//tipos de dados

var nome = "bibia"; // string
var idade = 17; //number
var nota = 9.5; // number 
var data; // undefined 
var aprovado = true; //boolean
var diploma = null; //nula 

//variáveis constantes (var, let, const)

var nota1 = 5; //declarar
nota1= 7; //redefinir 
var nota1 = 10; //redeclarar 

let nota2 = 8; //declarar 
nota2 = 9; //redefinindo
//let nota2 = 10; //ERRO não permite redeclarar a nota 

const media = 7.5;//declarar
// media = 8; // ao iniciar exibe ERRO- não permite redefinir 

//operadores aritmetricos
let a = 10;
let b = 3;
console.log(a+b);//13
console.log(a-b);//7
console.log(a*b);//30
console.log(a/b);//3.33
console.log(a%b); //1

//Operadores Relacionais (Boolean)
console.log(10 > 5);  // true
console.log(10 === "10"); // false (tipos diferentes)
console.log(10 == "10");  // true (conversão implícita)

let idade = 20;
console.log(idade > 18 && idade < 30); // true -E
console.log(idade < 18 && idade > 65); // false -E
console.log(idade < 18 || idade > 65); // false -OU
console.log(idade > 18 || idade > 65); // -OU
console.log(!false); // true -NÃO

//Condicionais 
//exemplo If Else 

var idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}


//exemplo If Else Encadeado 
let nota = 6.5;

if (nota >=7){
    console.log("Aprovado Queridão!");
} else if (nota>=5){
    console.log("Recuperação Queridão!");
} else{
    console.log("Reprovado, tadinho :(")
}

let mês = 3;
switch (mês) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  default:
    console.log("Outro Mês")
    break;
}


//limitável
for (let i = 0; i <= 5; i++) {
  console.log("Iteração:" + i);
}
//ilimitável
let condition= true;
let numero = 3;
var contador = 0;
while (condition) {
    let sorteio =Math.random(5)
    contador++
  if (numero == sorteio){
    console.log("Acertou com:" +contador+"tentivas")
    condition= false;
  }
  console.log(condition)
}


//funções -- function 
function saudacao(nome) {
  return "Olá, " + nome;
}

let nome = "Maria";
console.log(saudacao(nome));
