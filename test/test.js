const { expect } = require('chai');

describe('Sample Test Suite', () => {
  it('should add numbers correctly', () => {
    expect(1 + 1).to.equal(2);
  });
  
  it('should verify lodash is working', () => {
    const _ = require('lodash');
    expect(_.isEmpty({})).to.be.true;
  });
});