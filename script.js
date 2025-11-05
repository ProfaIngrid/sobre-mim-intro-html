// inicializando o emailjs com um token (public key)
emailjs.init("XfjxcKSSSN_NYQux2");

// função para enviar o formulário por email
function enviarFormulario(e){
    // impede a página de recarregar quando o formulário for enviado
    e.preventDefault();

    // pegando os campos do formulário por ID e armazenando em variaveis
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let resposta = document.getElementById("resposta");
    let form = document.getElementById("form");

    // envia o email usando o : 
        // service_id
        // template_id
        // campos do email
    emailjs.send("service_60hkbpd", "template_r8ejt7c", {
        nome: nome,
        email: email,
        mensagem: mensagem
    });

    // alert("Sua mensagem foi enviada com sucesso! Aguarde nosso retorno!");
   
    // inserir dentro do paragrafo (HTML) o texto 
    // apos enviar a mensagem
    resposta.innerHTML = "Sua mensagem foi enviada com sucesso! Aguarde nosso retorno!";
    
    // limpa os campos do formulário
    form.reset();
}
