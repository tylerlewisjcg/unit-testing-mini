let fns = require('./../functions')

describe('math tests', ()=>{
    test('2 + 30 should be 32', ()=> {
      let result = fns.add(2, 30);
      expect(result).toBe(32);

    })
    test('2 * 30 should be 60', ()=> {
        let result = fns.mult(2, 30);
        expect(result).toBe(60);
    })
    test('2 + "30" should be 32', ()=>{
        let result = fns.add(2, '30');
        expect(result).toBe(32);
    })
})