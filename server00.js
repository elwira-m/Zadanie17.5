var express = require('express');

var app = express();

app.use('/store', function(req, res, next){
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store');
	
    next();
});


app.get('/store', function (req, res) {
	res.send('to jest sklep');
	console.log('to jest sklep - w niedzielę zamknięte');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
})



app.listen(3000);