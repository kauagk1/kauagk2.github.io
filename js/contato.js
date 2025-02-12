function salvarDados() {
    // Obtém o valor do campo de texto com o id 'nome' do formulário
    const nome = document.getElementById('nome').value;

    // Obtém o valor do campo de texto com o id 'email' do formulário
    const email = document.getElementById('email').value;

    // Obtém o valor do campo de texto com o id 'mensagem' do formulário
    const mensagem = document.getElementById('mensagem').value;

    // Exibe o nome enviado na área de confirmação, alterando o texto do elemento com id 'nomeConfirmacao'
    document.getElementById('nomeConfirmacao').textContent = nome;

    // Exibe o e-mail enviado na área de confirmação, alterando o texto do elemento com id 'emailConfirmacao'
    document.getElementById('emailConfirmacao').textContent = email;

    // Exibe a mensagem enviada na área de confirmação, alterando o texto do elemento com id 'mensagemConfirmacao'
    document.getElementById('mensagemConfirmacao').textContent = mensagem; 
    
    // Torna visível a área de confirmação, exibindo o elemento com id 'dadosEnviados'
    document.getElementById('dadosEnviados').style.display = 'block';

    // Limpa todos os campos do formulário, com base no id 'form-contato'
    document.getElementById('form-contato').reset();
}
