//import needed modules
var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

//create server
var server = http.createServer(function(req, res){
    //print out the request
    console.log('Request for ' + req.url + ' by method ' + req.method);

    //we only handle get
    if (req.method == 'GET') {  

        if (req.url == '/') fileUrl = '/index.html';
            else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filePath);

        // if the file extension is html
        if (fileExt == '.html') {
            // the exists variable in the function will have true if the file exists
            fs.exists(filePath, function(exists) {
                //in case it doesn't 
                if (!exists) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found</h1></body></html>');
                    return;
                }

                //if it does exist
                res.writeHead(200, { 'Content-Type': 'text/html' });
                //read the file and then pipe it to the response message
                fs.createReadStream(filePath).pipe(res);
            });
        } //end if (fileExt == '.html')
        //i'm only handling html files
        else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<html><body><h1>Error 404: ' + fileUrl +  ' not a HTML file</h1></body></html>');
        }  
    }//end if (req.method == 'GET')
    // anything else other than get it doesn't work
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>');
    }
})

//start server
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
