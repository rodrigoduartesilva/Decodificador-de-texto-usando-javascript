var btnCripto = document.querySelector(".botao-criptografar");
var btnDescripto = document.querySelector(".botao-descriptografar");
var btnCopiar = document.querySelector(".btn-copiar");
var containerSaida = document.querySelector(".container-saida");
var containerSaidaResultado = document.querySelector(".container-saida-resultado");

/*Evento de Click para os botões de Criptografar, Descriptografar e Copiar*/

btnCripto.addEventListener("click", function(){
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");

    if(textoDigitado != ""){
        paragrafo.textContent = criptografarTextoDigitado(textoDigitado);
        containerSaida.style.display = "none";
        containerSaidaResultado.style.display = "block";
        containerSaidaResultado.appendChild(paragrafo);
    } else {
        alert("Campo vazio - Digite um texto a ser criptografado!");
    }
});

btnDescripto.addEventListener("click", function(){
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");
    
    if(textoDigitado != ""){
        paragrafo.textContent = DescriptocriptografarTextoDigitado(textoDigitado);
        containerSaida.style.display = "none";
        containerSaidaResultado.style.display = "block";
        containerSaidaResultado.appendChild(paragrafo);
    } else {
        alert("Campo vazio - Digite um texto a ser descriptografado!");
    }
});

btnCopiar.addEventListener("click", function(){
    var campoResultado = document.querySelector(".container-saida-resultado").textContent;
    navigator.clipboard.writeText(campoResultado);
});


/*------------------------------------------------------------------------*/

function criptografarTextoDigitado(texto){
    const criptografiaTexto = ["enter", "imes", "ai", "ober", "ufat"];
    const descriptografiaTexto = ["e", "i", "a", "o", "u"];

     var resultadoCripto = texto.replace(/e|i|a|o|u/gi, function(texto){
        if(texto == descriptografiaTexto[0]){
            return criptografiaTexto[0];
        } else if(texto == descriptografiaTexto[1]){
            return criptografiaTexto[1];
        } else if(texto == descriptografiaTexto[2]){
            return criptografiaTexto[2];
        } else if(texto == descriptografiaTexto[3]){
            return criptografiaTexto[3];
        } else if(texto == descriptografiaTexto[4]){
            return criptografiaTexto[4];
        }
    });

    return resultadoCripto;
}

function DescriptocriptografarTextoDigitado(texto){
    const criptografiaTexto = ["enter", "imes", "ai", "ober", "ufat"];
    const descriptografiaTexto = ["e", "i", "a", "o", "u"];

     var resultadoDescripto = texto.replace(/enter|imes|ai|ober|ufat/gi, function(texto){
        if(texto == criptografiaTexto[0]){
            return descriptografiaTexto[0];
        } else if(texto == criptografiaTexto[1]){
            return descriptografiaTexto[1];
        } else if(texto == criptografiaTexto[2]){
            return descriptografiaTexto[2];
        } else if(texto == criptografiaTexto[3]){
            return descriptografiaTexto[3];
        } else if(texto == criptografiaTexto[4]){
            return descriptografiaTexto[4];
        }
    });

    return resultadoDescripto;
}