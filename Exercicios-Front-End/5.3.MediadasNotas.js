const calcularMedia = (nota1, nota2, nota3) => {
    const media = (nota1 + nota2 + nota3) / 3;
    return media >= 7 ? "Aprovado" : "Reprovado";
};

// Exemplos:
console.log(calcularMedia(8, 7, 9)); // Aprovado
console.log(calcularMedia(5, 6, 7)); // Reprovado
console.log(calcularMedia(7, 7, 7)); // Aprovado
console.log(calcularMedia(4, 5, 6)); // Reprovado
