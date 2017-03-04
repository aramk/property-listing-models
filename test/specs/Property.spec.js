const expect = require('chai').expect;

const Property = require('../../src/Property');

describe('Property', () => {

  it('should exist', () => expect(Property).to.be.defined);
  
  it('should be constructable', () => {
    const prop = new Property({
      zoopla: {
        listingId: '42439704',
        url: 'http://www.zoopla.co.uk/for-sale/details/42439704?utm_source=v1:5aSNAi3PGgfcqUG7Kupyp2H3fR8_1O_b&utm_medium=api'
      },
      description: 'This is a description',
      publishDate: new Date(),
      floors: 1,
      bedrooms: 6,
      bathrooms: 6,
      listingType: 'sale',
      status: 'active',
      landUse: 'Residential',
      propertyType: 'Detached house',
      price: '£3,950,000',
      location: {
        latitute: 51.364033,
        longitude: 0.042641,
        address: '9 Princess Parade, Crofton Road, Orpington',
        postcode: 'BR2',
        country: 'England'
      },
      images: [
        {
          url: 'https://li.zoocdn.com/2bafe85de562dfec50681e6c708d6afee32b2ea0_354_255.jpg',
          thumbnailUrl: 'https://li.zoocdn.com/2bafe85de562dfec50681e6c708d6afee32b2ea0_80_60.jpg'
        }
      ]
    });
    expect(prop._id).to.be.a.string;
    const error = prop.validateSync();
    expect(error).to.not.be.defined;
  });

});
