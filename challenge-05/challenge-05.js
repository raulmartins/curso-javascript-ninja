/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myarr = ['string', true, 1, 1.2, {nome:'raul', sobrenome:'martins'}];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const myReturnArr = (myarr) => {
  return myarr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myReturnArr(myarr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

let funcWithTwoProps = (arr, index) => {

  return arr[index];

};


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrVariable = [null, 'bruna','suri', '15/05/2019'];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(funcWithTwoProps(arrVariable,0));
console.log(funcWithTwoProps(arrVariable,1));
console.log(funcWithTwoProps(arrVariable,2));
console.log(funcWithTwoProps(arrVariable,3));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

let findBook = (name) => {
  const books = {
    'javascript ninja':{
      quantidadePaginas:200,
      autor:'Raul Martins',
      editora:'Alura',
    },
    'um amor em frente a escola':{
      quantidadePaginas:300,
      autor:'Bruna Martins',
      editora:'Amores'
    },
    'chegando a felicidade':{
      quantidadePaginas:300,
      autor:'Suri Martins',
      editora:'Amores'
    }
  }
  return books[name] ? books[name] : books;
}
console.log(findBook('Livro Da suri'.toLowerCase()));


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(findBook())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nameBook = 'chegando a felicidade'
console.log(`O livro ${nameBook} tem ${findBook(nameBook).quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nameBook} é ${findBook(nameBook).autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nameBook} foi publicado pela editora ${findBook(nameBook).editora}.`)
