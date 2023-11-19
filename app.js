const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 80;

let userGoal = "Be a good programmer"
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`<html>
        <head>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <section>
                <h2>My Course Goal!</h2>
                <h3>${userGoal}</h3>
            </section>
            <form action="/store-goal" method="POST">
                <div class="form-control">
                    <label>Course Goal</label>
                    <input type="text" name="goal">
                </div>
                <button>Set Course Goal</button>
            </form>
        </body>
    </html>
    `)
})

app.post('/store-goal', (req, res) => {
    const newUserGoal = req.body.goal;
    console.log(newUserGoal)
    userGoal = newUserGoal;
    res.redirect('/')

})

app.listen(PORT, () => {
    console.log(`app is running on port http://localhost:${PORT}`)
})