var express =require ('express');
var app=express();
var bodyparser=require('body-parser');
var session=require('session');
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"test123"}));
app.set('view engine','ejs');
app.get('/',function(req,res){
	if(req.session.uid>0)
	{
res.render('home');
	}
	else{
		res.redirect('/login');
	}
});

app.listen(8080,()=>{console.log("server running")});
