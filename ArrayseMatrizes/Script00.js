//Array e Matrizes

//Array - sempre for lista tem que por colchetes
let numeros = [1,2,3,4,5,6,7,8,9]; //cada um deles tem um indice...sempre começa em 0...o indice do ultimo elemento é sempre o total da lista -1
console.log(numeros[8]);
let texto = ["cachorro", "gato", "macaco", "elefante", "arara"];
console.log(texto[3]);
let mista = ["Abobrinha",true,5]; 
console.log(mista[1]);

//Tamanho do Array (length)
console.log(texto.length); 

//Adicionar elementos ou alterar em um Array 

//adicionar 
//começo - não é tão comum (unshift)
texto.unshift("barata");
console.log(texto);
//final (push)
texto.push("aranha");
console.log(texto);


//remover do começo (shift)
texto.shift();
console.log(texto);
//remover do final (pop)
texto.pop();
console.log(texto);


//alteração de valor 
texto[2] = "galinha"; 
console.log(texto);


//percorrer um array já pronto (for // foreach)
for(let i = 0; i<numeros.length; i++){
    console.log("Números ["+i+"] = "+numeros[i]);
}
//foreach 
texto.forEach(t => {
    console.log(t)
});


let lista = [];
for (let i = 1; i<=100; i++){
    lista.push(i);
}
console.log("==============================");
console.log("Contagem de Números até 100: ");
console.log(lista);
console.log("==============================");


//retorna o indice 
texto.indexOf("gato");


//splice-remover elemento de posição especifica
texto.splice(2, 1); //-> posição e qntd de vezes de delete
console.log(texto);


//OPERAÇÕES AVANÇADAS DE ARRAYS 
let valores = [10, 20, 30, 40, 50];

//map: Cria um novo array(vetor) baseado no original.
let valoresDobro = valores.map(x => x * 2);
console.log(valoresDobro); // [20, 40, 60]

//filter->Retorna um novo array com elementos que atendem a uma condição.
let partevalores = [10, 25, 30, 45];
let maioresQue20 = partevalores.filter(x => x > 20);
console.log(maioresQue20); // [25, 30, 45]
//desafio
//filter x<35 e map  x*2
let desafvalores = valores.filter(x=> x<35); 
let mapvalores = desafvalores.map(x=> x*2);
console.log(mapvalores);

//OUUU
let desafvalores2 = valores.filter(x=> x<35).map(x=> x*2);
console.log(desafvalores2);


//Reduce-> Reduz todos os elementos do array a um único valor.
//x= acumulador; y= valor atual
let soma = valores.reduce((x, valorAtual) => x + valorAtual, 0);
console.log(soma); // 150


//Sort -> formas de ordenação de dados 
let z = [2,6,3,8,1,7,9,5];
z.sort(); 
console.log(z); 