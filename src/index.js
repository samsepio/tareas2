const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const nodemailer=require('nodemailer');
const engine=require('ejs');
const morgan=require('morgan');
const app=express();

mongoose.connect('mongodb+srv://walter:3219329910@database1-wegwd.mongodb.net/test?retryWrites=true&w=majority')
	.then(db => console.log('conectado a la base de datos'))
	.catch(err => console.log(err));

app.set('puerto',process.env.PORT || 8000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(require('./routes'));

app.use(express.static(path.join(__dirname,'./public')));

const server=app.listen(app.get('puerto'),()=>{
	console.log('servidor ejecutandose en el puerto',app.get('puerto'));
});
