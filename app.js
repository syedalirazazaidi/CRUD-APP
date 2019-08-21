const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars')
const bodyParser= require('body-parser')
const Employee = mongoose.model('Employee');

require('./models/db');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layout',
}));
app.set('view engine', 'hbs');

const employeeController = require('./controller/employeeController');
const data = require('./controller/data');
app.listen(3010, () => {
    console.log("server startd on port 3000");
})
app.use('/employee', employeeController);
app.use('/', data);