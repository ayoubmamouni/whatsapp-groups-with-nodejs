const express = require('express')
const app = express()

if (process.env !== 'production') {
    const morgan = require('morgan')
    app.use(morgan('dev'))
}

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})
let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started at ${port}`))