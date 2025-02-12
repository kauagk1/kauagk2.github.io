
function calculadora(operacao) {
    // Obtém os valores inseridos pelo usuário nos campos de entrada
    var num1 = parseFloat(document.getElementById('num1').value);  // Obtém o primeiro número e converte para float
    var num2 = parseFloat(document.getElementById('num2').value);  // Obtém o segundo número e converte para float
    var resultado;  // Variável para armazenar o resultado da operação

    // A estrutura switch é usada para verificar qual operação foi escolhida pelo usuário
    switch (operacao) {
        case '+':
            resultado = num1 + num2;  // Soma os dois números
            break;
        case '-':
            resultado = num1 - num2;  // Subtrai o segundo número do primeiro
            break;
        case '*':
            resultado = num1 * num2;  // Multiplica os dois números
            break;
        case '/':
            // Verifica se o segundo número é diferente de zero para evitar divisão por zero
            if (num2 !== 0) {
                resultado = num1 / num2;  // Realiza a divisão
            } else {
                resultado = 'Erro: Divisão por zero';  // Caso o segundo número seja zero, exibe um erro
            }
            break;
        default:
            resultado = 'Operação inválida';  // Caso o operador não seja reconhecido, exibe um erro
    }

    // Atualiza o conteúdo da tag <span> com o id "result" para exibir o resultado
    document.getElementById('result').textContent = resultado;
}
