const createProxyMiddleware = require('http-proxy-middleware');
module.exports = app => {
	app.use(
		createProxyMiddleware(
			['/api','/socket.io'],
			{
				
			}
		)
	)
}