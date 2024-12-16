var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var nivel =  window.location.search
nivel  = nivel.replace('?', '')
var criaMosquitoTempo = 1500
if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(mosquito)
        document.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function randomPosition(){//cria uma posicao aleatoria

    //remover o mosquito anterior(caso exista) pra evitar embaraçamento
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            document.location.href = 'game_over.html'
            }else{
                document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
                vidas++
            }

        
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criando elemento mosquito html
    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosquito.png" 
    mosquito.className = tamanhoAleatorio() +  ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){//cria um tamanho aleatorio pra cada mosquito
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}


