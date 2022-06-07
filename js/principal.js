var btnCripto = document.querySelector(".botao-criptografar");
var btnDescripto = document.querySelector(".botao-descriptografar");
var btnCopiar = document.querySelector(".btn-copiar");
var containerSaida = document.querySelector(".container-saida");
var containerSaidaResultado = document.querySelector(".container-saida-resultado");

/*Evento de Click para os botões de Criptografar, Descriptografar e Copiar*/

btnCripto.addEventListener("click", function(){
    
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");
    paragrafo.textContent = textoDigitado;
    containerSaida.style.display = "none";
    containerSaidaResultado.style.display = "block";
    containerSaidaResultado.appendChild(paragrafo);

});

btnDescripto.addEventListener("click", function(){
    console.log("Botão Descripto");
});

btnCopiar.addEventListener("click", function(){
    console.log("Botão Copiar");
});
