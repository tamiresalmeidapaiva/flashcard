function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementsById('container')
    let cartao = document.createElement('article')
    cartao.className = ('cartao')

    cartao.innerHTML = 
    <div class= "cartao_conteudo">
    < h3> progamação</h3>
    <div class="cartao_conteudo_pergunta">
    <p> python?</p>
    </div> 
    <div class="cartao_conteudo_pergunta">
    <p> o javascript é uma linguagem de progamação.</p>
    </div>
    </div>

 let respostaEstaVisivel = false
 function viraCartao() {
 respostaEstaVisivível = !respostaEstaVisível
 cartao.classList.toggle('active',respostaEstaVisível)
 }
 cartao.eddEventListener('click', viracartao)

 container.appendChild(cartao)
} 