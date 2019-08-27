//This route is for the html routing.

const path = require('path');

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    app.get('/favorites', function(req, res){
        res.sendFile(path.join(__dirname, "../public/favorites.html"))
    })
}