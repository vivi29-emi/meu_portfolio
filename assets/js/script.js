// Configuração da camada contato

let nome= window.document.getElementById('nome');
let email=document.querySelector('#email');
let assunto=document.querySelector('#mensagem');
 
// Validação do nome
function validarNome(){
    let txtNome =document.querySelector('#txtNome');

    if(nome.value.lengt<=5){
        txtNome.innerHTML= 'Nome Invalido'
        txtNome.style.color='red'
    }else{
        txtNome.innerHTML= 'Nome Valido'
        txtNome.style.color='green'
    }
}
// Validação do e-mail
function validarEmail(){
    let txtEmail =document.querySelector('#txtEmail');

    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML= 'E-mail Invalido'
        txtEmail.style.color='red'
    }

}

function validarAssunto(){
    let txtAssunto =document.querySelector('#txtAssunto');

    if(assunto.value.length >50){
        txtAssunto.innerHTML= 'A quantidade minima de caracteres é de ate 50'
        txtAssunto.style.color='red'
   
    }

}

