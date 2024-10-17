function criacartao(categoria,pergunta,resposta){
    let conteiner= document.getElementById(conteiner)
    let cartao= document.createElement(àrticle)
    cartao.className='cartao'
}
cartao.innerHTML=
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteuo__pergunta">
    <p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
    <p>${resposta}</p>
</div>
</div>
let respostaEstaVisivel=false
function viracartao(){
    respostaEstaVisivel=false
    cartao.classList.toggle('active',respostaEstaVisivel)
}
cartao.addEventListerner('click', viracartao)
conteiner.appendChild(cartao)
