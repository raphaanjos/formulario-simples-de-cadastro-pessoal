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


function validarFormulario() {
 // implementar
    
}