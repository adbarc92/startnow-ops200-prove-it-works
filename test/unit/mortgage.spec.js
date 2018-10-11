const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it('should have a constructor', () => {
    expect(mortgage.constructor).to.exist;
  });

  it('should have a monthly payments function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should have a function which returns a number', () => {
    expect(mortgage.monthlyPayment()).to.be.a('number');
  });

  it('should calculate monthly payments correctly', () => {

    mortgageTest = new Mortgage(100000, 3.75, 15, 12);
    expect(mortgageTest.monthlyPayment()).to.equal(727.22);
  });

});
