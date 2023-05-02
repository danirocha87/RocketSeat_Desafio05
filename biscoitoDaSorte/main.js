const botaoOpenCookies = document.querySelector('.btn-opencookies')
const imgDoBiscoito = document.querySelector('.img-biscoito')
const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPrincipaldeMsg = document.querySelector('.caixa-principal-msg')
const pMensagem = document.querySelector('.p-msg')

let listaDeMensagem = [
  'o maior amor do mundo é o amor próprio',
  'Tudo posso naquele que me fortalece',
  'Cavalo dado não se olha os dentes',
  'Não espere pelo amanhã, porque ele pode não chegar',
  'O problema não é ser intenso demais o problema é ter menos perto de você',
  'Nunca troque o que você mais quer na vida pelo que você mais quer no momento, pois os momentos passam e a vida continua.',
  'Objetivo do dia: Ser uma pessoa melhor, não perfeito, apenas melhor que ontem!',
  'Humildade não te faz melhor que ninguém, mas te faz diferente de muitos.',
  'Não tenha medo da mudança. Coisas boas se vão para que melhores possam vir.',
  'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.',
  'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
  'Há muros que só a paciência derruba. E há pontes que só o carinho constrói.',
  'Quando você tem consciência do seu valor não é qualquer coisa que te satisfaz e muito menos qualquer coisa que te atinge.',
  'Sempre que possível, dê um sorriso a um estranho na rua. Pode ser o único gesto de amor que ele verá no dia.',
  'Não existe amor impossível, apenas pessoas incapazes de lutar por aquilo que chamam de amor.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

botaoOpenCookies.addEventListener('click', ()=> {
  caixaPrincipal.classList.remove('hide')
  caixaPrincipaldeMsg.classList.add('hide')
})

imgDoBiscoito.addEventListener('click', ()=> {
  caixaPrincipal.classList.add('hide')
  caixaPrincipaldeMsg.classList.remove('hide')
  let numeroAleatorio = Math.round((Math.random() * 10))
  pMensagem.textContent = listaDeMensagem[numeroAleatorio]
 
})



