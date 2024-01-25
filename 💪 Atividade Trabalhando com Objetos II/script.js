const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]
  

  function contaTotal(lista){
    return lista.length
  }
 
  console.log(contaTotal(carros))
  
//   Exercício 2 - Quanto vale
//  todo meu estoque de veículos?
// Crie uma função que recebe a lista de carros como 
// parâmetro e retorna a soma do preço dos veículos.

// Retorne uma string com o seguinte formato: '
// A soma do preço de todos veículos é R$ 00000000,00'

function precoTotal(lista){
    let total = 0;
    for(let i = 0; i < lista.length; i++){
        total += lista[i].preco
    }

    return `A soma do preço de todos os veículos é R$ ${total.toFixed(2).replace(".", ",")} `
}

console.log(precoTotal(carros))

// Exercício 3 - Procurando um veículo por marca
// Crie uma função que recebe a lista 
// de carros e a marca procurada como parâmetro, filtre 
// e retorne todos veículos da marca.

function filtraPorMarca(lista, marca){
    let veiculosPorMarca = []
    for (let i = 0; i < lista.length; i++){
        if(lista[i].marca === marca){
            veiculosPorMarca.push(lista[i])
        }
    }
    return veiculosPorMarca
}

console.log(filtraPorMarca(carros, "Ford"))

// Exercício 4 - Procurando um veículo por acessório
// Crie uma função que recebe a lista de carros e o 
// acessório procurado como parâmetro, filtre e retorne 
// todos veículos que tenham o acessório.

function filtraPorAcessorios(lista, acessorio){
    let veiculosPorAcessorios = [];

    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista[i].acessorios.length; j++){
            if(lista[i].acessorios[j] === acessorio){
                veiculosPorAcessorios.push(lista[i])
            }
        }
    }
    return veiculosPorAcessorios
}

console.log(filtraPorAcessorios(carros, `Trava`))

// Exercício 5 - Encontrando veículos completos
// Crie uma função que recebe a lista 
// de carros como parâmetro, filtre e retorne todos 
// veículos que sejam completos.

function eCarroCompleto(lista){
    let carroCompleto = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i].completo){
            carroCompleto.push(lista[i])
        }
    }
    return carroCompleto
}

console.log(eCarroCompleto(carros))

// Exercício 6 - Adicionando mais um carro a 
// concessionária
// Crie uma função para adicionar novos carros a 
// lista. 
// Retorne a lista de carros atualizada.

let carro = {
    modelo: "Tiggo",
    marca: "Chery",
    ano: "2019",
    cor: "Marrom",
    completo: true,
    acessorio: [`Vidro Elétrico`, `Trava`],
    preco: 6799.33
}

function adicionarCarro(novoCarro){
    carros.push(novoCarro)
}

console.log(carros)
adicionarCarro(carro)
console.log(carros)


// Exercício 7 - Removendo um carro da lista de carros 
// da concessionária
// Crie uma função que recebe como parâmetro a lista 
// de carros e o índice de um veículo.

// Remova o elemento referente ao indice e 
// retorne a lista atualizada.

// Lembre-se de tratar quando a posição for inválida.

function removeCarro(lista, indice){

    let carrosAtualizados = []

    for(let i = 0; i < lista.length; i++){
        if (i != indice){
            carrosAtualizados.push(lista[i])
        }
    }

    if(carrosAtualizados.length < indice){
        return "Posição Inválida"
    }

    return carrosAtualizados
}

console.log(removeCarro(carros, [1]))

// Exercício 8 - Procurando todos os carros novos
// Crie uma função que recebe a lista de carros 
// como parâmetro.

// Retorne a quantidade de carros 
// com menos de 10 anos.

function contaCarrosNovos(lista){
    let carrosMenosDezAnos = []

    for(let i = 0; i < lista.length; i++){
        if(lista[i].ano >= 2013){
            carrosMenosDezAnos.push(lista[i])
        }
    }
    return carrosMenosDezAnos
}

console.log(contaCarrosNovos(carros))

// Exercício 9 - Quem são os donos?
// Seu chefe percebeu que deixou de 
// incluir um campo importante nos objetos, 
// o campo 'donos'.

// Todos os carros da concessionária são 
// de segunda mão.

// Com isso, desenvolva uma 
// função que recebe como parâmetro a lista de carros, 
// um índice da lista e um objeto pessoa. 
// Dentro do objeto pessoa deve constar o 
// nome do proprietário e um telefone para contato.

// Sabemos que não existe esta propriedade, 
// então a propriedade donos deverá ser criada.

// Retorne a lista atualizada.

let pessoa = {
    nome: "Diego",
    telefone: "(41) 99194-5170",
}

function adicionarDono(lista, indice, dono){
    for(let i = 0; i < lista.length; i++){
        lista[i].dono = {}
    }

    lista[indice].dono = dono
}

console.log(adicionarDono(carros, 0, pessoa))
console.log(carros)