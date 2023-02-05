
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

console.log(estatisticas)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click",(evento)=>{
        alteraValor(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca , evento.target.dataset.controle);
    })
})

function alteraValor(operador, controle) {
    peca = controle.querySelector("[data-contador]");

    (operador === "-") ? peca.value = parseInt(peca.value) - 1 : peca.value = parseInt(peca.value) + 1;  
    
}

function atualizaEstatisticas (peca, operador) {

    estatisticas.forEach(   (elemento) => {
        if (operador === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

/*const controle = document.querySelectorAll("[data-controle]")

const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        alteraValor(evento.target.dataset.controle, evento.target.parentNode );
        atualizaValor(evento.target.dataset.peca);
    });
})

function alteraValor(operador, controle) {

    peca = controle.querySelector("[data-contador]");
    (operador === "-") ? peca.value = parseInt(peca.value) - 1 :  peca.value = parseInt(peca.value) + 1; 
    
}

function atualizaValor(peca) {
    
    estatistica.forEach (   (elemento ) =>{

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })


}*/
