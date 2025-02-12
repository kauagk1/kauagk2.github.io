// Gera um número aleatório entre 1 e 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Define o número de tentativas disponíveis
let attempts = 5;

// Função que é chamada quando o usuário clica no botão "Adivinhar"
function playGame() {
    // Obtém o palpite do usuário e converte para um número inteiro
    const guess = parseInt(document.getElementById('guess').value);

    // Verifica se o palpite está correto
    if (guess === randomNumber) {
        document.getElementById('gameResult').textContent = 'Parabéns, você acertou!';
    } else {
        // Se o palpite estiver errado, decrementa o número de tentativas
        attempts--;

        // Verifica se ainda restam tentativas
        if (attempts > 0) {
            // Se o número do palpite for maior ou menor que o sorteado
            if (guess > randomNumber) {
                document.getElementById('gameResult').textContent = `Errado! O número é menor. Você tem mais ${attempts} tentativas.`;
            } else {
                document.getElementById('gameResult').textContent = `Errado! O número é maior. Você tem mais ${attempts} tentativas.`;
            }
        } else {
            // Se o usuário não tiver mais tentativas, mostra o número sorteado
            document.getElementById('gameResult').textContent = `Fim de jogo! O número era ${randomNumber}.`;
        }
    }
}
