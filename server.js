/* By Fernando Soto @ferso
contact: erickfernando@gmail.com
-------------------------------------- */
const http  	= require('http');
const fs    	= require('fs');
const url   	= require("url");
const path  	= require("path");
const mime 		= require('mime');
const colors   = require('colors');

const port  	= 9000;
const file  	= 'index.html';
const root    	= 'public';
const docroot   = fs.realpathSync(path.join(__dirname,root));
try{
http.createServer(function (req, res) {
	var file = url.parse(req.url).pathname ;	
	var file = file == '/' ? '/index.html' : file;
	var fpath = path.join(docroot, file );
	console.log(fpath);
	fs.access(fpath, function(e){
		if(e){
			res.statusCode = 403;
			res.setHeader('Content-Type','text/plain');
			res.write('403 Forbidden');
			res.end();	
		}else{			
			res.statusCode = 200;
			res.setHeader('Content-Type', mime.lookup(fpath));
			res.write(fs.readFileSync(fpath,'binary'),'binary');
			res.end();
		}
	});	
}).listen(port);
console.log( (' Simple Server running at port '+port + ' ').bgGreen.black);
console.log( ('--------------------------------------------------').gray);
}catch(e){
	console.error(e);
}	