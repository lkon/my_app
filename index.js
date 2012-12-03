var handlers = require( './handlers' );
var router = require( './router' );
var server = require( './server' );

var handle = {};
handle['/'] = handlers.start;
handle['/start'] = handlers.start;
handle['/upload'] = handlers.upload;

server.start( router.route, handle );