"use strict";
// console.log("Olá Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando operações com Strings e realizando o parse com a
// //função parseInt...;
// console.log(parseInt(nr1)+parseInt(nr2));

// var nome1 = "Dubas";
// // let nome2 = "Serbatinho";
// // const nome3 ="Julia";
// nome = "Ale";
// console.log(nome);

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// var nome

// console.log(nome1);

/* <button value="click" id="meu-btn">Click</button> */
// const btn = document.getElementById("meu-btn");

// //PRIMEIRO PASSO PARA A TRANSFORMAÇÃO DO BOTÃO EM RGB...
// btn.addEventListener("click", function(){
//     // console.log(this.textContent);
//     //Função matemática Math
//     //randon = Retorna um número aleatório entre 0 e 1. Ex: 0.2323454545;
//     //floor  = Arrendonda o número para baixo.
//     //ceil   = Arrendonda o número para cima.
//     //round  = Arrendonda o número aleatório.
    
//     let r=0,g=0,b=0;
    
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);
    
//     // this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

    

// } );

//Declaração de um array e seus métodos!
let frutas = ["banana","maçã","laranja","morango","uva","cereja","amora","abacaxi"];
//Imprimindo um array
console.log(frutas);
console.log(frutas[7]);
//Verificando o tamanho do array através da propiedade length
console.log(`O tamanho do array é : ${frutas.length}`);

//Inserindo um item ao final do array com o método push(nomeItem);
frutas.push("pêssego")
console.log(frutas)
//Inserindo um item no início do array com o método unshift(nomeItem);
frutas.unshift("kiwi")
console.log(frutas)
//Removendo um item ao final do array com o método pop();
frutas.pop()
console.log(frutas)
//Removendo um item no início do array com o método shift();
frutas.shift()
console.log(frutas)

//Localizando um item no array com o método indexOf(nomeItem)
//Obs: O método indexOf(nomeItem) retorna o indice do item.
// let indice = frutas.indexOf("uva")
// console.log(`Indice do item buscado ${indice}`)
// console.log(`Elemento buscado ${frutas[indice]}`)

//Removendo um item do array com o método splice(indice do item, qtd de vezes que o índice será removido)
//Obs: Utilize o método IndexOf(nomeItem) para descobrir o índice do item
let indice = frutas.indexOf("amora")
console.log(`Elemento no indice antes da remoção :  ${frutas[indice]}`)
frutas.splice(indice,1)
console.log(frutas)
console.log(`Elemento no indice após a remoção :  ${frutas[indice]}`)