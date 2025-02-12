// Função para converter Celsius para Fahrenheit
function convertTemperature() {
    // Obtém o valor inserido no campo 'tempInput' e o converte para número
    const celsius = parseFloat(document.getElementById('tempInput').value);

    // Realiza a conversão de Celsius para Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Exibe o resultado da conversão no elemento com id 'temperatureResult'
    document.getElementById('temperatureResult').textContent = `${celsius}°C = ${fahrenheit}°F`;
}

// Função para converter Real para Euro
function converterRealParaEuro() {
    // Obtém o valor inserido no campo 'real' e o converte para número
    const real = parseFloat(document.getElementById('real').value);

    // Define a taxa de câmbio para a conversão (1 Real = 0.18 Euros, exemplo)
    const taxaCambio = 0.18; 

    // Verifica se o valor inserido é um número válido
    if (!isNaN(real)) {
        // Realiza a conversão
        const euro = real * taxaCambio;

        // Exibe o resultado da conversão no elemento com id 'resultado-real-euro', formatando para 2 casas decimais
        document.getElementById('resultado-real-euro').textContent = `€${euro.toFixed(2)}`;
    } else {
        // Se o valor não for válido, exibe uma mensagem de erro
        document.getElementById('resultado-real-euro').textContent = 'Por favor, insira um valor válido.';
    }
}

// Função para converter Segundos para Horas, Minutos e Segundos
function converterSegundosParaHoras() {
    // Obtém o valor inserido no campo 'secondsInput' e o converte para número inteiro
    const segundos = parseInt(document.getElementById('secondsInput').value);

    // Verifica se o valor inserido é um número válido e não negativo
    if (!isNaN(segundos) && segundos >= 0) {
        // Converte os segundos para horas, minutos e segundos restantes
        const horas = Math.floor(segundos / 3600); 
        const minutos = Math.floor((segundos % 3600) / 60); 
        const segundosRestantes = segundos % 60; 

        // Exibe o resultado da conversão no elemento com id 'resultado-segundos'
        document.getElementById('resultado-segundos').textContent = 
            `${horas} horas, ${minutos} minutos e ${segundosRestantes} segundos`;
    } else {
        // Se o valor não for válido ou negativo, exibe uma mensagem de erro
        document.getElementById('resultado-segundos').textContent = 'Por favor, insira um valor válido de segundos.';
    }
}

// Função para converter Horas para Segundos
function converterHorasParaSegundos() {
    // Obtém o valor inserido no campo 'hoursInput' e o converte para número inteiro
    const horas = parseInt(document.getElementById('hoursInput').value);

    // Verifica se o valor inserido é um número válido e não negativo
    if (!isNaN(horas) && horas >= 0) {
        // Converte as horas para segundos
        const segundos = horas * 3600;

        // Exibe o resultado da conversão no elemento com id 'resultado-horas'
        document.getElementById('resultado-horas').textContent = `${segundos} segundos`;
    } else {
        // Se o valor não for válido ou negativo, exibe uma mensagem de erro
        document.getElementById('resultado-horas').textContent = 'Por favor, insira um valor válido de horas.';
    }
}
