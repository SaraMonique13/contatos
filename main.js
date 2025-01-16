const form = document.getElementById('form')
const nome = document.getElementById('inome')
const tel = document.getElementById('iphone')
const inputNome = []
const inputTel = []
let linhas = ''


form.addEventListener('submit', function cadastrar(e){
e.preventDefault()

adicionaLinha()
atualizaTabela()


})

function adicionaLinha(){
  

    if(nome.value == 0 || tel.value == 0){
        window.alert('Por favor, insira os dados primeiro')
        
    }
    
    if(inputNome.includes(nome.value) || inputTel.includes(tel.value)){
        window.alert('Esse contato já foi adicionado!')
        
        
    }else{

        inputNome.push(nome.value)
        inputTel.push(tel.value)
        
        let linha = '<tr>'

        linha += `<td>${nome.value}</td>`
        linha += `<td>${tel.value}</td>`
        linha += '</tr>'

        linhas += linha


    
    nome.value = ''
    tel.value = ''
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}