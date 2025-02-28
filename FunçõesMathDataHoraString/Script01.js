//Funções de Data e Hora 

let agora = new Date(); //-> Instanciando o obj da classe Date
console.log(agora)
console.log(agora.toLocaleString());


//Funções GET 
console.log(agora.getFullYear());

//Funções SET
console.log(agora.setFullYear(2030));

//funçõess TO (Imprimir)
console.log(agora.toLocaleDateString());
//Manipulação de Datas 
let data1 = new Date();
let data2 = new Date("2025-12-31")
let diferenca = data2 - data1; //miliseconds