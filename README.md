# Property Listing Models

Models for working with housing property listings.

## Setup

Default configuration is in `src/config.js` and environment variables will override it.

### Mongoose

Mongoose requires that a MongoDB server is running on the configured address in `config.js`.

If you don't have MongoDB 3+, install it with [brew](http://brew.sh/):

	brew update
	brew install mongodb

Use these commands to set up a temporary server for testing:

	mkdir -p /tmp/property-listing-mongo
	mongod --dbpath /tmp/property-listing-mongo --port 27017

## Tests

	npm test              # single execution
	npm run test:watch    # re-execute on changes 


## TODO

* Unit tests should not require a MongoDB connection. Separate out the Mongoose logic.
