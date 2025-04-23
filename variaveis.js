//declaração de variável com var

/*var nome = "Luciano"

var nome = "João"*/

//declaração de variável com let

// let nome = "Luciano"

// nome = "João"

//variável declarada com const

const nome = "Luciano" //string

const sobrenome = "Rocha"

const valor = 21.90 // number

const isLogin = false // boolean

let preco //undefined

const endereco = null //null

const alunos = ["João","Maria","José"] //array


const alunoDoSenai ={
    nome:"Luciano",
    sobrenome:"Rocha",
    turno:"noturno",
    idade:42,
    cursos:["games","programação web"]
}

const alunosDoSenai = [
    {
        login:"joao",
        email:"joao@gmail.com",
        cursos:["games","web"]
    },
    {
        login:"maria",
        email:"maria@gmail.com",
        cursos:["design","games"]
    }
]

// console.log(nome + " " + sobrenome)

console.log(`Meu nome completo é ${nome} ${sobrenome}`)


// console.log(alunosDoSenai[1].cursos[0])


//console.log(alunos[0]) //pega o valor do índice do array