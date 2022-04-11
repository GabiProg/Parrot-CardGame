let gif = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

let qtdCartas = Number(prompt("Olá, bem-vindo(a)! Com quantas cartas gostaria de jogar?"));

while(qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14){
    qtdCartas = Number(prompt("Olá, bem-vindo(a)! Com quantas cartas gostaria de jogar?"));
}


let joguinho = [];
primeiroClickCarta = null;
parClickCarta = null;
qtdClicksCarta = 0;

entrada();
displayCartas();

function entrada(){
    for(let i = 0; i < qtdCartas/2; i++){
        let carta = adcCarta(i);
        joguinho.push(carta);
        joguinho.push(carta);
    }
    joguinho.sort(comparador);
}
function adcCarta(indice){
    let todasCartas = gif[indice];
    return `<div class="carta" onclick="adcEfeitoComClick(this)">
                <div class="frente">
                    <img src="${todasCartas}" width="100px" height="100px" alt="frente da carta">
                </div>
                <div class="atras">
                    <img src="./front.png" width="100px" height="100px" alt="atras da carta">
                </div>
            </div>`
}
function displayCartas() {
    let jogo = document.querySelector(".jogo")
    for(let i = 0; i < joguinho.length; i++) {
        let elementos = joguinho[i]
        jogo.innerHTML += elementos;
        
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}
function adcEfeitoComClick(elementos){
    elementos.classList.add("efeito");
    if(primeiroClickCarta === null){
        primeiroClickCarta = elementos;
    } else {
        parClickCarta = elementos;
        cartasPares();
        qtdClicksCarta += 1;
    }
}
function cartasPares(){
    if(primeiroClickCarta.innerHTML === parClickCarta.innerHTML){
        primeiroClickCarta.classList.add("parEncontrado");
        parClickCarta.classList.add("parEncontrado");
        primeiroClickCarta = null;
        parClickCarta = null;
        setTimeout(finalDoJogo, 500);
    } else {
        setTimeout(cartaDesvirada, 1000);
    }
}
function cartaDesvirada(){
    primeiroClickCarta.classList.remove("efeito");
    parClickCarta.classList.remove("efeito");
    primeiroClickCarta = null;
    parClickCarta = null;
}
function finalDoJogo(){
    let final = document.querySelectorAll(".parEncontrado");
    if(final.length === qtdCartas) {
        alert(`Parabéns! Você ganhou em ${qtdClicksCarta} jogadas!`)
    }
}