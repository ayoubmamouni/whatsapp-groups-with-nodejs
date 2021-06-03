const express = require('express')
const morgan = require('morgan')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.render('home')
})
let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started at ${port}`))