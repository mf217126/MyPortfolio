
//get stuff
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');


const app = express();


const port = 2050;
console.log("I am here");

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) =>{
  response.render('home');
});

app.use(express.static(path.join(__dirname)));
app.listen(port,(err) => {
  if (err){
    return console.log('uh0h', err)
  }
  console.log('server is listening on ${port}')
});
