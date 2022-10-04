const baralho = []
const cores = ["vermelho", "azul", "verde", "rosa", "amarelo", "roxo"]

let quantCores = 6

const btSorteiaCores = document.querySelector("#btSorteiaCores")
const btConfirmar = document.querySelector("#btConfirmar")
const btRecarregar = document.querySelector("#btRecarregar")

const Vermelho = document.querySelector("#Vermelho")
const Azul = document.querySelector("#Azul")
const Verde = document.querySelector("#Verde")
const Rosa = document.querySelector("#Rosa")
const Amarelo = document.querySelector("#Amarelo")
const Roxo = document.querySelector("#Roxo")


function MontaCores(){
    for (let i = 0; i <=5; i++){
        baralho.push(`${i+1}_${cores[i]}`)
      
    }      
}
MontaCores()

function someCartas(){
    teste.className = "d-none"
}

btSorteiaCores.addEventListener("click", () =>{
    for(var i=0;i<=5;i++){

        const posicao = Math.floor(Math.random() *quantCores);
        quantCores--;
        
        const carta = baralho.splice(posicao, 1).toString()
        
        
        const imgCarta = document.createElement("img")
        
        imgCarta.src = `${carta}.png`
        imgCarta.alt = `Carta ${carta.substr(2)}`
        imgCarta.className = "img-" + `${carta.substr(2)}`
        teste.append(imgCarta)
        
    }

  setTimeout(someCartas, 4000)
  document.getElementById("btSorteiaCores").disabled = true;
  
})


function adicionarCor(cor){
    const novaCarta = document.createElement("img")
    
    novaCarta.src = cor + ".png"
    novaCarta.textAlt = "Cor: " + cor.substr(2)
    novaCarta.className = "img-" + cor.substr(2)


    divJogador.appendChild(novaCarta)
    

}

btConfirmar.addEventListener("click", () => {
    let imgComp = divComputador.querySelectorAll("img")
    let imgJogador = divJogador.querySelectorAll("img")
    
    let corComp = []
    let corJogador = []
    let erro = 0

    for (let i = 0;i<=5 ; i++){
        if(imgComp[i].className == "img-vermelho"){
            corComp.push("Vermelho")
        }
        else if(imgComp[i].className == "img-azul"){
            corComp.push("Azul")
        }
        else if(imgComp[i].className == "img-verde"){
            corComp.push("Verde")
        }
        else if(imgComp[i].className == "img-rosa"){
            corComp.push("Rosa")
        }
        else if(imgComp[i].className == "img-amarelo"){
            corComp.push("Amarelo")
        }
        else{
            corComp.push("Roxo")
        }

    }

    for (let i = 0;i<=5 ; i++){
        if(imgJogador[i].className == "img-Vermelho"){
            corJogador.push("Vermelho")
        }
        else if(imgJogador[i].className == "img-Azul"){
            corJogador.push("Azul")
        }
        else if(imgJogador[i].className == "img-Verde"){
            corJogador.push("Verde")
        }
        else if(imgJogador[i].className == "img-Rosa"){
            corJogador.push("Rosa")
        }
        else if(imgJogador[i].className == "img-Amarelo"){
            corJogador.push("Amarelo")
        }
        else{
            corJogador.push("Roxo")
        }

    }
    
 

    if(imgJogador.length > imgComp.length || imgJogador.length < imgComp.length){
        outErro.className = "display-3 text-danger mt-3 d-inline"
        erro++          
        teste.className = "d-inline"
        
    }
    for(let i= 0; i <=corComp.length;i++){
        if(corComp[i] != corJogador[i]){
            outErro.className = "display-3 text-danger mt-3 d-inline"
            erro++ 
            teste.className = "d-inline"          
            
        }
    }

    if(erro == 0){
        outOk.className = "display-3 text-primary  mt-3 d-inline"
        teste.className = "d-inline"
    }
    document.getElementById("btConfirmar").disabled = true;
    btRecarregar.className = "btn btn-success float-right d-inline"
})
function jogarNovamente(){
    window.location.reload();
}

Vermelho.addEventListener("click", () => adicionarCor("1_Vermelho"));
Azul.addEventListener("click", () => adicionarCor("2_Azul"));
Verde.addEventListener("click", () => adicionarCor("3_Verde"));
Rosa.addEventListener("click", () => adicionarCor("4_Rosa"));
Amarelo.addEventListener("click", () => adicionarCor("5_Amarelo"));
Roxo.addEventListener("click", () => adicionarCor("6_Roxo"));
btRecarregar.addEventListener("click", jogarNovamente);

