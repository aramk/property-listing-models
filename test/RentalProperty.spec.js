const expect = require('chai').expect;

const RentalProperty = require('../src/RentalProperty');

describe('RentalProperty', () => {

  it('should exist', () => expect(RentalProperty).to.be.defined);
  
  it('should be constructable', () => {
    const prop = new RentalProperty({
      content: 'This is a rental property'
    });
    expect(prop.id).to.be.a('string');
    expect(prop.id).to.have.length(9);
  });

});
