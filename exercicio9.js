const mensagensDivertidas = 
[
    "Como é a piada do pinto caipira? Pirrr",
    "Era uma vez uma galinha de uma perna só. Ela foi ciscar e caiu.",
    "Porque é que o Hitler se suicidou? Porque viu a conta do gás."
]   

let botaoDivertido = document.getElementById("botaoDivertido")
let mensagemDivertida = document.getElementById("mensagemDivertida")

botaoDivertido.addEventListener('click', function(){
    //Math.floor(x) retorna o menor número inteiro dentre o número "x"
    //Math.random() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length) ]

    mensagemDivertida.textContent = mensagemAleatoria;
} )