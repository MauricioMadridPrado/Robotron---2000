
let click = document.querySelector('#calcular');
let n = 0;
click.addEventListener("click", contaClick)

function contaClick () {
    n++;
    (n == 1)? console.log("Fui clicado "+ n + " vez!") : console.log("Fui clicado "+ n + " vezes!");
}
