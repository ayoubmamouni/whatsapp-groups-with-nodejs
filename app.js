const express = require('express')
const app = express()

//in development mode, We dont need those (dotenv & morgan) in production mode!
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    const logger = require('morgan')
    app.use(logger('dev'))
}

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})
let PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started at ${PORT}`))