//Funções Matemáticas (MATH)

//->Math.sqrt //-> Math.pow

//Raiz quadrada de 25 
console.log(Math.sqrt(25)); //Resultado 5;]


//Potencia de um nº
console.log(Math.pow(3, 2)); // 3² = 9
console.log(Math.pow(24, 1/3)); // 27^(1/3) = 3


//arredondamento 
//ROUND 
console.log(Math.round (4.5)); //4 

//FLOOR
console.log(Math.floor(4.9)); //4

//CEIL
console.log(Math.ceil(4.1)); //5

//numeros aleatorios 
console.log(Math.random());// 0->1

//0 ->100
console.log(Math.round(Math.random()*100)); 

//0->99
console.log(Math.round(Math.random()*100));
//0->100
console.log(Math.ceil(Math.random()*100));

//30->40
console.log(Math.round(Math.random()*10+30));
//50->100
console.log(Math.round(Math.random()*50+50));

//ABSOLUTO, MINIMO E MAXIMO
console.log(Math.abs(-10)); // Retorna 10 (valor absoluto)
console.log(Math.min(1, 2, 3, 4)); // Retorna 2 (o menor valor da lista)
console.log(Math.max(5, 2, 6, 3)); // Retorna 9 (o maior valor da lista)


//