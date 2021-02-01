//Modulos
const express=require('express');//Framework
const morgan=require('morgan');
const exphbs=require('express-handlebars');
const path= require('path');
const flash=require('connect-flash');
const session=require('express-session');
const MySQLStore=require('express-mysql-session');
const {database}=require('./keys');
const passport=require ('passport');



//Inicialización Modulos
const app=express();
require('./lib/passport');

//Variables Configuracion

app.set('port', process.env.PORT || 4000);//Port Servidor
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
//Inicialización plantilla
app.set('view engine','.hbs');
//Middlewares
app.use(session({
    secret:'faztmysqlnodesession',
    resave:false,
    saveUninitialized:false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));//Inicialiacion y nos muestra un mensaje por consola, dev
app.use(express.urlencoded({extended:false}));// metodo para restringir los datos que me envia el usuario
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
//Variables Globales toma la informacion del usuario 
app.use((req,res,next)=>{
    app.locals.success= req.flash('success');
    app.locals.mensage= req.flash('mensage');
    app.locals.user = req.user; // es para poder aceder a los datos del usuario desde cualquier vistas cuando login
    next();
});
//Rutas
app.use(require('./routes'));
app.use('/login',require('./routes/login'));
app.use('/cliente',require('./routes/admin/cliente'));
app.use('/usuario',require('./routes/admin/user'));
app.use('/rol',require('./routes/admin/roles'));
app.use('/modulo',require('./routes/admin/modulo'));
//Carpeta publica
app.use(express.static(path.join(__dirname,'public')));






//Inicialización Servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor Puerto',app.get('port'));
});