require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('Testing');
})


app.listen(8000, () => console.log('server is running on port 8000'));
