import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Hello there, how are you docker</h2>')
})


app.listen(() => {
    `app is up and  running on port ${3000}`
})