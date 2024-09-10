const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/form',(req,res)=>{
    const form = req.body;
    console.log(form);
    res.send('Form Submitted');
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});