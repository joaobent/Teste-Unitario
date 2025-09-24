const {test, it, expect, describe} = require('@jest/globals')

test("Deve retornar que 2+2 é igual a 4",()=>{
    expect (2+2).toBe(4); });
it("Deve retornar a igualdade de um objeto com toEqual", ()=>{
    const obj1= {atributo1:1, atributo:2}
    expect (obj1).toEqual({atributo1:1, atributo:2});
    expect(obj1).toHaveProperty('atributo1');
    expect(obj1).not.toHaveProperty("nome")
    expect(obj1).toHaveProperty('atributo', 2)
    expect(obj1.atributo).toBe(2)
});
it("Deve retornar se a string existe na palavra teste com o toMatch", ()=>{
    expect('teste').toMatch(/e/); });
it("Deve testar numeros", ()=>{
    const numeros = 10;
    expect(numeros).toBeLessThan(11)
    expect(numeros).toBeLessThanOrEqual(10)
    expect(numeros).toBeCloseTo(10.001)
    expect(numeros).toBeCloseTo(9.9996)
    expect(numeros).toBeGreaterThanOrEqual(10)
    expect(numeros).toHaveProperty('toString')
})