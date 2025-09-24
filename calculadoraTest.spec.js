const {test, it, expect, describe} = require('@jest/globals')
const {soma, subtracao, multiplicacao, divisao}= require('./calculadora.js')

describe("Teste da calculadora com valor inteiro",()=>{
    test("Deve retornar a Soma de dois valores", ()=>{
        const esperado=30
        const retornado= soma(10,20)
        expect(retornado).toBe(esperado)
    })


    test("Deve retornar a Subtração de dois valores", ()=>{
        const esperado=-10
        const retornado= subtracao(10,20)
        expect(retornado).toBe(esperado)
    }) 
    

    test("Deve retornar a Multiplicação de dois valores", ()=>{
        const esperado=200
        const retornado= multiplicacao(10,20)
        expect(retornado).toBe(esperado)
    })


    test("Deve retornar a Divisão de dois valores", ()=>{
        const esperado=2
        const retornado= divisao(20,10)
        expect(retornado).toBe(esperado)
    });
    test("Deve retonar erro ao realizar divisão por 0", ()=>{
        expect(()=> divisao(10,0)).toThrow('Divisor Invalido');
    });

});