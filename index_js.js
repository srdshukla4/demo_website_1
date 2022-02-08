const app = require('express')();

app.get('/', (req, res) =>
    res.json({ message: 'Docker is easy yo' })
)

const port = process.env.PORT || 8080;

app.listen(port, () => console.Console.log('app listening on http://localhost:${-[]}'))