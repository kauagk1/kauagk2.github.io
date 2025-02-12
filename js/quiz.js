// Função para verificar as respostas do quiz
function checkQuizAnswer() {
    // Respostas corretas para o quiz (definidas como uma lista)
    const correctAnswers = [
        'gleybson',  // Nome do usuário
        16,          // Idade do usuário (número)
        'palmares',  // Local de nascimento
        'ipi',       // Curso escolhido
        'não'        // Resposta sobre animais de estimação
    ];

    // Coletando as respostas fornecidas pelo usuário nos inputs
    const userAnswers = [
        document.getElementById('answer1').value.trim().toLowerCase(), // Nome
        parseInt(document.getElementById('answer2').value),            // Idade (convertido para número)
        document.getElementById('answer3').value.trim().toLowerCase(), // Local de nascimento
        document.getElementById('answer4').value.trim().toLowerCase(), // Curso escolhido
        document.getElementById('answer5').value.trim().toLowerCase()  // Resposta sobre animais de estimação
    ];

    let score = 0;  // Variável para contar o número de respostas corretas

    // Loop para comparar as respostas do usuário com as corretas
    for (let i = 0; i < correctAnswers.length; i++) {
        // Comparação para as respostas numéricas
        if (typeof correctAnswers[i] === 'number') {
            if (userAnswers[i] === correctAnswers[i]) {
                score++;  // Se a resposta estiver correta, aumenta o número de acertos
            }
        } else {
            // Comparação para as respostas de texto
            if (userAnswers[i] === correctAnswers[i].toString()) {
                score++;  // Se a resposta estiver correta, aumenta o número de acertos
            }
        }
    }

    // Exibe o número de acertos no resultado do quiz
    const resultText = `Você acertou ${score} de 5 questões!`;
    document.getElementById('quizResult').textContent = resultText;

    // Habilita o botão 'Voltar para o portfólio' quando o quiz for respondido
    document.getElementById('backButton').disabled = false;
}
