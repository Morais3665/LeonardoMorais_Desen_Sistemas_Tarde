//EXECUTAR MASCARAS
//DEFINE OBJETO E CHAMA FUNÇÃO

function mascara(o,f){

    objeto=o
    funcao=f
    setTimeout("executaMascara()",1)
}

function executaMascara(){
    objeto.value=funcao(objeto.value)
}

//MASCARAS

//Mascara do Telefone

function telefone(){
    
    variavel=variavel.replace(/\D/g,"") //Remove tudo que não é número

    variavel=variavel.replace(/^(\d\d) (\d)/g,"($1) $2") //Adiciona parenteses em volta dos dois primeiros digitos

    variavel=variavel.replace(/(\d{4}) (\d)/, "$1-$2") //coloca a segunda barra
    return variavel
}

//Mascara RG e CPF
function RGeCPF(){
    variavel=variavel.replace(/\D/g,"") //Remove tudo que não é número

    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2") //Coloca um ponto após o TERCEIRO digito e o QUARTO digito

    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2") //Coloca um ponto após o SEXTO digito e o QUARTO SETIMO

    variavel=variavel.replace(/(\d{3})(\d{1,2})$/,"$1.$2") //Coloca p HIFEM após o sétimo digito e permite apenas dois digitos após o HIFEM
}

//Mascara do CEP

function cep(variavel){
    variavel=variavel.replace(/\D/g,"") //Remove tudo que não é número

    variavel=variavel.replace(/(\d{2})(\d)/, "$1.$2") //coloca a segunda barra

    variavel=variavel.replace(/(\d{3})(\d{1,3})$/, "$1-$2")
    return variavel
}

//Mascara data

function data(variavel){
    variavel=variavel.replace(/\D/g,"") //Remove tudo que não é número

    variavel=variavel.replace(/(\d{2})(\d)/, "$1/$2")

    variavel=variavel.replace(/(\d{2})(\d)/, "$1/$2")

    
    
}