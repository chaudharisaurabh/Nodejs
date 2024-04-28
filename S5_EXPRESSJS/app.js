//imports
const http =require('http');
const express =require('express');
const bodyParser =require('body-parser');
const path =require('path');
const expressHbs =require('express-handlebars')

//project imports

const adminData =require('./routes/admin');
const shopRoutes =require('./routes/shop');


const app =express();
app.engine('handlebars',expressHbs({layoutsDir:'views/layouts/'}));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
});















app.listen(3000,()=>{
    console.log("Server listening at port 3000");
})