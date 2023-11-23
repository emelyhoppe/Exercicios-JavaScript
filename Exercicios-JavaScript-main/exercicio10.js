let numeroSecreto = Math.floor(Math.random() * 100) + 1;

const qtdTentativas = 0;

let verificarBotao = document.getElementById("verificarBotao");

let tentativaEntrada = document.getElementById("tentativa");

let dica = document.getElementById("dica");

verificarBotao.addEventListener("click", function () {

const tentativa = parseInt(tentativaEntrada.value);

if (tentativa === numeroSecreto) {
dica.textContent = 'Parabéns! Voce acertou em ${qtdtentativas} tentaivas. ';
verificarBotao.disabled = true;
}
else if (tentativa < numeroSecreto) {
dica.textContent = "Tente um número maior, animal.";
qtdTentativas++;
} else {
dica.textContent = "Tente um numero menor, animal.";
qtdTentativas++;

}




});