const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 80;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});


app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res){
    res.render('index.ejs')    
})

app.get('/write', function(req, res){
    res.render('write.ejs')    
})


// app.get('/write', function(req, res){
//     res.sendFile(__dirname + '/write.html')
// });

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html')
// });