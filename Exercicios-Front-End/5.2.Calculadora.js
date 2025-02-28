const calculadora = (num1, num2, operacao) => {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
        default:
            return "Erro: operação inválida";
    }
};

console.log(calculadora(10, 5, "+")); 
console.log(calculadora(9, 3, "/"));  
console.log(calculadora(7, 2, "*"));  
console.log(calculadora(8, 0, "/"));  
console.log(calculadora(5, 2, "%"));  
