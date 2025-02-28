//limitável
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}
//ilimitável
let continuar = true;
let contador = 0;
while (continuar) {
  console.log(contador);
  contador++; //++ aumetando em 1
  if (contador>5){
    continuar = false;
  }
  console.log(continuar)
}


