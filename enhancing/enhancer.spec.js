
const enhancer = require('./enhancer.js');
const initialValue = {name: "sami", durability: 50, enhancement: 1 }


describe('enhancer.js', () => {

  describe('repair function', ()=>{
    it('should return durability restored to 100', ()=>{
      
      const expected = {name: "sami", durability: 100, enhancement: 1 }
      expect(enhancer.repair(initialValue)).toStrictEqual(expected)
   })
  })

  describe('success function', ()=> {
    it('should return enhancement === 2 ', ()=>{
      const expected2 = {name: "sami", durability: 50, enhancement: 2 }
      expect(enhancer.success(initialValue)).toStrictEqual(expected2)
    })
      // to make sure the enhancement does not improve after it reaches the 20th level
    it('should return enhancement === 20', ()=>{
      const initialValue20 = {name : "sami", durability: 75, enhancement: 20 }
      expect(enhancer.success(initialValue20)).toStrictEqual(initialValue20)
    })

  })

  describe('fail function', ()=>{
    // if the enhancement is less than 15
    it('shoud return durability - 5', ()=>{
      const expected = {name : "sami", durability: 40, enhancement: 11 }
      expect(enhancer.fail({name : "sami", durability: 45, enhancement: 11 })).toStrictEqual(expected)
    })

    //if the enhancement is grater than 15 and less than 17
    it('shoud return durability - 10', ()=>{
      const startValue = {name : "sami", durability: 45, enhancement: 15 }
      const expected = {name : "sami", durability: 35, enhancement: 15}
      expect(enhancer.fail(startValue)).toStrictEqual(expected)
    })

     //if the enhancement is grater than 16
     it('shoud return enhancement - 1', ()=>{
      const startValue = {name : "sami", durability: 45, enhancement: 17 }
      const expected = {name : "sami", durability: 45, enhancement: 16}
      expect(enhancer.fail(startValue)).toStrictEqual(expected)
    })
  })
  
})



