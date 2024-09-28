const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000


app.set('view engine', 'ejs');
// Setting this explicity even though the views folder in main directory is where the view engine looks for views by default
app.set('views', './view');
app.use(express.static(path.join(__dirname, 'public')));


// console.log('PATH:', path.join(__dirname, '/views/auth'))
app.get('/', (req, res) => {
  res.render('login')
})


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})