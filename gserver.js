const express = require('express')
const dotenv = require('dotenv')
//const exphbs = require('express-handlebars')
//const { engine } = require('express-handlebars');
const connectToDatabase = require('./models/index');
const error = require('./middleware/error')
const path = require('path')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')

// Route Files
const frankfurtcontact = require('./routes/frankfurtcontact')
const contact = require('./routes/contact')
const logsystem = require('./routes/logsystem')
const technician = require('./routes/technician')
const auth = require('./routes/auth');

const errorHadler = require('./middleware/error');
const bodyParser = require('body-parser');

// Load env vars
dotenv.config({path:'./config/config.env'})

const app = express()

//View Engine Setting
app.set('view engine', 'ejs');
//app.engine('handlebars', engine({ defaultLayout: "main" }));
//app.set('view engine', 'handlebars'); v   
app.use('/public', express.static(path.join(__dirname, `public`)))

app.use(express.json())

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
     app.use(morgan('dev'));
}

//Set CORS
app.use(cors({
    origin: "https://frankfurtfintek.netlify.app"
}))
app.use((cors({
    origin: 'https://it-systemlogger.netlify.app'
})))



//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Mount Routers
app.get('/', (req, res) => {
    res.render('contact')
})
app.use('/api/v1/frankfurtcontact', frankfurtcontact)
app.use('/api/v1/contact', contact)
app.use('/api/v1/logs', logsystem)
app.use('/api/v1/techs', technician)
app.use('/api/v1/auth', auth)
//app.use('/api/v1/users', users)
app.use(errorHadler)

const PORT = process.env.PORT || 5000

//CONNECTINT TO DATA BASE
 connectToDatabase( {
             useNewUrlParser: true, useUnifiedTopoology: true 
        })
 .then((error) => {
    if (error) {
        console.log(error)
        return process.exit(1)
    }
    app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});

});