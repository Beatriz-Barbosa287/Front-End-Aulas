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

let dia = 3;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  default:
    console.log("Outro dia")
    break;
}
