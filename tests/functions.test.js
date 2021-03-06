const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/functions.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('functions', () => {
  let testArray = [];
  beforeEach = () => {
    testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk'];
  };
  afterEach = () => {
    testArray = [];
  };

  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
    it(`Should return ${addNums}`, () => {
      const x = 100;
      const y = 200;
      const concat = addNums(x,y)
      console.log(concat)
      expect(concat).to.equal(300);
    })
    // i.e. if is called addNums(1, 2); the return value should be 3.
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      // pass our spy `callBack` to our newCbInvoker fn.
      newCbInvoker(callBack)
      it('should be called back', () => {
        expect(callBack).to.have.been.called;
      })
      // write a test that to see if our callback has been called.
      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const newIterator = cases.iterator;
      const cb = sinon.spy();
      const calledBack = cb.callCount
      newIterator(5,cb);
      console.log(calledBack)
      expect(cb).have.callCount(5);
    });
  });
});
