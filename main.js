require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//constant
const PORT = process.env.PORT || 8000  ;

const routes = require('./routes/route.routes');

app.use(routes)

app.listen(PORT, (e) => {
    if (e){
        console.error('Error starting server:', e);
        return;
    }
    console.log(`Server started on port ${PORT}`);
})