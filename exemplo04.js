/*4 - Escreva um programa que pergunte a quantidade de
 km percorridos por um carro alugado pelo usuário, assim como a 
quantidade de dias pelos quais o carro foi alugado. 
Calcule o preço a pagar, sabendo que o carro custa 60,00 reais
 por dia e 0,15 centavos por km rodado.*/

 let kmPercorridos = 470
 let diasCarroAlugado = 10
 let precoAPagar = (diasCarroAlugado *60) + (kmPercorridos * 0.15)
 
 console.log("preço a pagar é R$" + precoAPagar)//preço a pagar é R$670.5