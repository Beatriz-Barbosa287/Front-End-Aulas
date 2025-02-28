let texto= "Aula JavaScript";

//Contagem de caracteres
console.log(texto.length); //18

//maiusculas e minusculas 
console.log(texto.toUpperCase());//maiuscula
console.log(texto.toLowerCase());//minuscula


//partes da string 
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

//substituição de texto
let novotexto = texto.replace("JavaScript", "TypeScript");
console.log(novotexto);

//trim (tesoura)
let textoEspaco = "  JavaScript   ";
let textoCortado = textoEspaco.trim();
console.log(textoEspaco);
console.log(textoCortado);

//split (separação)
let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensarray = linguagens.split(",");
console.log(linguagens);
console.log(linguagensarray);

