const express = require('express')
const dotenv = require('dotenv')
const exphb = require('express-handlebars')
const connectToDatabase = require('./models/index');
const error = require('./middleware/error')
const path = require('path')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')

// Route Files
const frankfurtcontact = require('./routes/frankfurtcontact')
const auth = require('./routes/auth');

const errorHadler = require('./middleware/error');

// Load env vars
dotenv.config({path:'./config/config.env'})

const app = express()

app.use(express.json())

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
     app.use(morgan('dev'));
}

//Set CORS
app.use(cors({
    origin: "https://frankfurtfintek.netlify.app"}))

//Set Static folder
app.use(express.static(path.join(__dirname, `public`)))

//Mount Routers
app.use('/api/v1/frankfurtcontact', frankfurtcontact)
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