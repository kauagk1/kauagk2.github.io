
// Função para calcular operações básicas (+, -, *, /)
function calculate(operator) {
    // Obtém os valores inseridos nos campos de entrada e converte para número
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Verifica qual operação foi selecionada e realiza o cálculo correspondente
    if (operator === '+') result = num1 + num2;  // Soma
    else if (operator === '-') result = num1 - num2;  // Subtração
    else if (operator === '*') result = num1 * num2;  // Multiplicação
    else if (operator === '/') result = num1 / num2;  // Divisão

    // Exibe o resultado na tela
    document.getElementById('result').textContent = result;
}

// Função para converter temperatura de Celsius para Fahrenheit
function convertTemperature() {
    // Obtém a temperatura em Celsius inserida pelo usuário e converte para número
    const celsius = parseFloat(document.getElementById('tempInput').value);
    // Converte para Fahrenheit utilizando a fórmula
    const fahrenheit = (celsius * 9/5) + 32;
    // Exibe o resultado da conversão
    document.getElementById('temperatureResult').textContent = `${celsius}°C = ${fahrenheit}°F`;
}

// Função para calcular o IMC (Índice de Massa Corporal)
function calculateIMC() {
    // Obtém o peso e altura inseridos pelo usuário e converte para número
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    // Calcula o IMC com a fórmula: IMC = peso / (altura * altura)
    const imc = weight / (height * height);
    // Exibe o resultado do IMC com 2 casas decimais
    document.getElementById('imcResult').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
}

// Função para verificar a resposta do quiz
function checkQuizAnswer() {
    // Obtém a resposta inserida no campo de entrada e converte para minúsculas para comparar
    const answer = document.getElementById('quizAnswer').value.toLowerCase();
    // Resposta correta para o quiz
    const correctAnswer = 'brasília';
    
    // Compara a resposta do usuário com a correta e exibe o resultado
    if (answer === correctAnswer) {
        document.getElementById('quizResult').textContent = 'Resposta correta!';
    } else {
        document.getElementById('quizResult').textContent = 'Resposta errada. Tente novamente!';
    }
}

// Função para o jogo de adivinhar o número
let randomNumber = Math.floor(Math.random() * 100) + 1;  // Gera um número aleatório entre 1 e 100
let attempts = 5;  // Define o número de tentativas

function playGame() {
    // Obtém o palpite do usuário e converte para inteiro
    const guess = parseInt(document.getElementById('guess').value);

    // Verifica se o palpite está correto
    if (guess === randomNumber) {
        document.getElementById('gameResult').textContent = 'Parabéns, você acertou!';  // Se acertou
    } else {
        attempts--;  // Decrementa as tentativas restantes
        // Se o usuário ainda tem tentativas restantes, exibe uma mensagem informando o número de tentativas
        if (attempts > 0) {
            document.getElementById('gameResult').textContent = `Errado! Você tem mais ${attempts} tentativas.`;
        } else {
            // Caso o usuário tenha esgotado todas as tentativas, exibe o resultado final
            document.getElementById('gameResult').textContent = `Fim de jogo! O número era ${randomNumber}.`;
        }
    }
}
