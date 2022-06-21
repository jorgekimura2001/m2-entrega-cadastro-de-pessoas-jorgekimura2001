class Pessoas {
    static pessoasCadastradas = [];
    static novoUsuario (pessoa){
        Pessoas.pessoasCadastradas.push(pessoa)
    }
    static filtrar(){
        const filtro = this.pessoas.filter()
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
console.log(btn_registrar)
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
    renderizarPessoa()
    const totalCadastrados = document.querySelector('#total-alunos');
    totalCadastrados.innerText = Pessoas.pessoasCadastradas.length
})
function renderizarPessoa(){
    const listaCadastrados = document.querySelector('#lista-de-alunos');
    listaCadastrados.innerHTML = "";
    Pessoas.pessoasCadastradas.forEach((pessoa) => {
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

