const coracoes = document.querySelectorAll(".coracao");

function favoritar(){
    console.log("cliquei", this);
    this.classList.toggle("favoritado");
     if ( this.classList.contains("favoritado") ) {
        this.src = "/assets/coracao-cheio.png"
    } else {
        this.src = "/assets/coracao-vazado.png"
    }
}

coracoes.forEach( function(coracao) {
    coracao.addEventListener("click", favoritar);
});