// Função que recebe 2 numeros e retorna o maior deles

function retornaMaior(numero1, numero2){
   
    if (numero1 > numero2){
        return numero1;
    }if(numero2 > numero1) {
        return numero2;
    }else{
        return console.log("Resposta: Ambos os numeros possuem o mesmo valor.");
    }
    
}
const retornaMaior2 = (x, y) => x > y ? x : y;


 console.log(retornaMaior(1, 3));
 console.log(retornaMaior2(100, 99));