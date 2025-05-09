var setaDir = window.document.getElementById("seta-dir")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsq = window.document.getElementById("seta-esq")

function minhapica() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDir.style = "display:none"
    setaEsq.style = "display:flex; margin-top:70%"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDir.style = "display: flex; margin-top:35%"
    setaEsq.style = "display:none"
}