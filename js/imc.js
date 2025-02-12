function calculateIMC() {
    // Obtém o valor do peso do usuário a partir do campo de input com id 'weight' e converte para número
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Obtém o valor da altura do usuário a partir do campo de input com id 'height' e converte para número
    const height = parseFloat(document.getElementById('height').value);
    
    // Calcula o IMC usando a fórmula: IMC = peso / (altura * altura)
    const imc = weight / (height * height);
    
    // Exibe o resultado do IMC no parágrafo com id 'imcResult', arredondado para 2 casas decimais
    document.getElementById('imcResult').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
}
