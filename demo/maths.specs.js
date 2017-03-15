'use strict';

describe('working tests', () => {
  it('should work', () => {
    expect(1+1).toBe(2);
    expect({}).toEqual({});
  })
})

describe('Maths', () => {
  describe('maths.sum', () => {
    it('should sum two numbers', ()=> {
      var result = maths.sum(1,1);
      expect(result).toBe(2)
    })
  });
  describe('maths.mult', () => {
    it('should multiply two numbers', ()=> {
      var result = maths.mult(3,6);
      expect(result).toBe(18);
      var result = maths.mult(3,4);
      expect(result).toBe(12)
    })
  });

})




























// Goal State

// describe( 'working tests', () => {
//   it( 'should work', () => {
//     expect(true).toBe(true);
//   });
// });

// describe('maths', () => {
//   describe('sum', () => {
//     it(' should add numbers', () => {
//       expect(maths.sum(1,1)).toBe(2);
//       expect(maths.sum(1,4)).toBe(5);
//     } );
//     it(' should deal with undefined and not die', () => {
//       expect(maths.sum()).toEqual(NaN);
//     } );
//   })
// })
