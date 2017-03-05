# Property Listing Models

Models for working with housing property listings.

## Setup

Default configuration is in `src/config.js` and environment variables will override it.

Mongoose requires that a MongoDB server is running on the configured address in `config.js`. Use these commands to set up a temporary server for testing:

	mkdir -p /tmp/property-listing-mongo
	mongod --dbpath /tmp/property-listing-mongo --port 27017

## Tests

	npm test              # single execution
	npm run test:watch    # re-execute on changes 


## TODO

* Unit tests should not require a MongoDB connection. Separate out the Mongoose logic.
