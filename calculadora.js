const soma= (a,b) => a+b;
const subtracao=(a,b) => a-b;
const divisao= (dividendo,divisor)=>{
    if(divisor == 0){
        throw new Error("Divisor Invalido")

    }
    return dividendo / divisor

}
const multiplicacao=(a,b)=> a*b 

module.exports= {
    soma,
    subtracao,
    divisao,
    multiplicacao
}