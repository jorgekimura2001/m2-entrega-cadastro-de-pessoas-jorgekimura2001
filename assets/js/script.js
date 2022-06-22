const btn_pesquisar = document.querySelector('#btn');
const selecaoCargoPesquisa = document.querySelector('#cargoOption')

class Pessoas {
    static pessoasCadastradas = [];
    static novoUsuario (novaPessoa){
        const filtroEmail = this.pessoasCadastradas.filter((pessoa) => pessoa.email === novaPessoa.email)
        if(filtroEmail.length === 0){
            Pessoas.pessoasCadastradas.push(novaPessoa)
            return this.pessoasCadastradas
         }
        return `Não pode cadastrar uma pessoa com o mesmo email`
    }

    static filtrarPorCargo(){
        let pessoasFiltradas = [];
        Pessoas.pessoasCadastradas.filter((pessoa) =>{
        if(selecaoCargoPesquisa.value === 'Todos'){
            renderizarPessoas(Pessoas.pessoasCadastradas)
        } 
        if(pessoa.cargo === selecaoCargoPesquisa.value){
            pessoasFiltradas.push(pessoa)
            renderizarPessoas(pessoasFiltradas)
        }
        })
        
    }
}
class Pessoa {
    constructor(nome, sobrenome, dataNascimento, email, contato, telefone, cargo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.contato = contato;
        this.telefone = telefone;
        this.cargo = cargo;
    }
}

const btn_registrar = document.querySelector('#register-button')
btn_registrar.addEventListener('click', (event) => {
    event.preventDefault()
    const campoCadastroNome = document.querySelector('#nome');
    const campoCadastroSobrenome = document.querySelector('#sobrenome');
    const campoCadastroDataNascimento = document.querySelector('#data-nascimento');
    const campoCadastroEmail = document.querySelector('#email');
    const campoCadastroContato = document.querySelector('#contato');
    const campoCadastroTelefone = document.querySelector('#telefone');
    const campoCadastroCargo = document.querySelector('#cargo');

    const pessoa = new Pessoa(campoCadastroNome.value, campoCadastroSobrenome.value, campoCadastroDataNascimento.value, campoCadastroEmail.value, campoCadastroContato.value, campoCadastroTelefone.value, campoCadastroCargo.value)
    Pessoas.novoUsuario(pessoa)
    console.log(pessoa)
    renderizarPessoas(Pessoas.pessoasCadastradas)
    const totalCadastrados = document.querySelector('#total-alunos');
    totalCadastrados.innerText = Pessoas.pessoasCadastradas.length
})

function renderizarPessoas(arrayPessoas){
    console.log(arrayPessoas)
    const listaCadastrados = document.querySelector('#lista-de-alunos');
    listaCadastrados.innerHTML = "";
    arrayPessoas.forEach((pessoa) => {
        const li = document.createElement('li');
        const nome = document.createElement('p');
        const sobrenome = document.createElement('p');
        const email = document.createElement('p');
        const cargo = document.createElement('p');

        nome.innerText = pessoa.nome;
        sobrenome.innerText = pessoa.sobrenome;
        email.innerText = pessoa.email;
        cargo.innerText = pessoa.cargo

        li.append(nome, sobrenome, email, cargo)
        listaCadastrados.appendChild(li)
   })
}


btn_pesquisar.addEventListener('click', () => {
    Pessoas.filtrarPorCargo()
})
