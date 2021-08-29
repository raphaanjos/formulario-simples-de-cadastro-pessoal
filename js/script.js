/** script da landing page formulario simples de cadastro pessoal */

// Atualiza o ano no footer do site [ano - ano_JavaScript] &copy;....
const tempo = new Date();
document.getElementById('ano').innerHTML = tempo.getFullYear();

// Máscara para formulário
// Objeto
const masks = { 
    nome(value) {
        return value
        .replace(/[^ a-zA-ZçÇàÀáÁãÃâÂéêÊÉíÍèÉìÌóòÒÓôÔõÕúÙ]/g, '');
    },
    cpf(value) {// data-js="cpf"
        return value
        .replace(/\D/g, '') // substitui o que não é número por uma string vazia 
        .replace(/(\d{3})(\d)/, '$1.$2') // Pesquisa por uma sequência de quatro números e adiciona um ponto após o terceiro.
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')// Pesquisa por uma sequência de três números seguidos de mais um ou dois números e adiciona um hifen;
        .replace(/(-\d{2})\d+?$/, '$1'); // captura os dois números após o hifen e os números subseqentes digitado, 
        // serão substituídos pelos dois números capurados após o hifen.
    },
    rg(value) { // até 11 números (123456789-1). Carteira de identidade nascional
        return value
        .replace(/\D/g, '')
        .replace(/(\d{10})(\d)/, '$1-$2')
        .replace(/(-\d{1})\d+?$/, '$1');
    },
    logradouro(value) {
        return value
        .replace(/[^ 0-9a-zA-ZçÇàÀáÁãÃâÂéêÊÉíÍèÉìÌóòÒÓôÔõÕúÙüÜÚ]/g, '');
    },
    complemento(value) {
        return value
        .replace(/[^ 0-9a-zA-ZçÇàÀáÁãÃâÂéêÊÉíÍèÉìÌóòÒÓôÔõÕúÙüÜÚ-]/g, '');
    },
    cidade(value) {
        return value
        .replace(/[^ 0-9a-zA-ZçÇàÀáÁãÃâÂéêÊÉíÍèÉìÌóòÒÓôÔõÕúÙüÜÚ-]/g, '');
    },
    bairro(value) {
        return value
        .replace(/[^ 0-9a-zA-ZçÇàÀáÁãÃâÂéêÊÉíÍèÉìÌóòÒÓôÔõÕúÙüÜÚ-]/g, '');
    },
    numeroImovel(value) { // Até cinco números
        return value 
        .replace(/\D/g, '')
        .replace(/(\d{5})\d+?$/, '$1');
    },
    cep(value) { // 12345-123
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{3})/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },
    email(value) {
        return value
    },
    telCelular(value) { // (xx) xxxxx-xxxx
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    },
    telFixo(value) { // (xx) xxxx-xxxx
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
}

/* 
    Adiciona eventos nos elementos de formulário. Retorna um objeto NodeList estático.
    Itera pela NodeList, que retorna todos os elementos de inputs
*/
document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js; // Pega a função de máscara ("data-*" data-js), retornada pela api dataset
    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value);// Atribui um novo valor a cada valor digitado no input
    }, false);
}) ;
// Fim máscara de formulário

// E-mail
function validarEmail(){
    let email = document.querySelector("#email");
    let error = document.querySelector("#email-invalido");
    if(!email.checkValidity()) {error.innerHTML = "Formato de e-mail inválido";} // Checa se o e-mail tem formato válido.
}
function redefinirMsgEmail(){
    let error = document.querySelector("#email-invalido");
    if(error.innerHTML == "Formato de e-mail inválido") {error.innerHTML = "";} // Atribui uma string vazia.
}

// Valida os campos do formulário.
function validarFormulario() {
    var formulario = document.forms["formcadastro"];
    var nome = formulario.nome.value;
    var cpf = formulario.cpf.value;
    var rg = formulario.rg.value;
    var sexo = formulario.sexo.value;
    var logradouro = formulario.logradouro.value;
    var numero = formulario.numero.value;
    var complemento = formulario.complemento.value;
    var cep = formulario.cep.value;
    var cidade = formulario.cidade.value;
    var bairro = formulario.bairro.value;
    var estado = formulario.estado.value;
    var email = formulario.email.value;
    var tel_celular = formulario.tel_celular.value;
    var tel_fixo = formulario.tel_fixo.value;

    var erro = false;

 if (nome.trim().length < 7) {
    alert("Insira seu nome completo.");
    erro = true;
}

if (cpf.replace(".", "").replace(".", "").replace("-", "").trim().length != 11) {
    alert("Verifique o seu CPF.");
    erro = true;
}

if (rg.trim() != 0 && rg.replace("-", "").trim().length < 5) {
    alert("Verifique o seu RG.");
    erro = true;
}

if (sexo.trim() !== "Masculino" && sexo.trim() !== "Feminino") {
    alert("Escolha um item da lista Sexo.");
    erro = true;
}

if (logradouro.trim().length < 4) {
    alert("Verifique o campo Logradouro.");
    erro = true;
}

if (numero.trim().length == 0) {
    alert("Preencha o campo Número.");
    erro = true;
}

if (complemento.trim() != 0 && complemento.trim().length < 4){
    alert("Verifique o campo Complemento.");
    erro = true;
}

if (cep.replace("-", "").trim().length != 8){
    alert("Verifique o campop CEP.");
    erro = true;
}

if (cidade.trim() == 0 || cidade.trim().length < 4) {
    alert("Verifique o campo Cidade.");
    erro = true;
}

if (bairro.trim() == 0 || bairro.trim().length < 5) {
    alert("Preencha o campo Bairro.");
    erro = true;
}

if (estado.trim() == 0) {
    alert("Escolha um item da lista Estado.");
    erro = true;
}

if (email.trim() != 0 && !checkEmail(email.trim())){
    alert("Verifique o formato do email.");
    erro = true;
}

if (document.getElementById("tel_celuar").value.replace("(", "").replace(")", "").replace(" ", "").replace("-", "").trim().length != 11) {
    alert("Verifique o campo Telefone Celular.");
    erro = true;
}

if (document.getElementById("tel_fixo").value.trim() != 0 && document.getElementById("tel_fixo").value.replace("(", "")
.replace(")", "").replace(" ", "").replace("-", "").trim().length < 11) {
    alert("Verifique o campo Telefone Fixo.");
    erro = true;
}

if (erro) {
    return false;
}else {
    alert("Dados enviados com sucesso!");
    return true;
}

}

// Verifica o formato do e-mail: exemplo3@email.x || exemplo@email.xx.xx, exemplo@email.x
function checkEmail(email){
    const regexemail1 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    const  regexemail2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    if (regexemail1.test(email) || regexemail2.test(email)) {
        return true;
    } else {
        return false;
    }
}