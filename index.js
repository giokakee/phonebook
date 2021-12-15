require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.static('build'))

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



//middlewares
app.use(cors());

app.use(bodyParser.json());

mongoose.connect(process.env.URI, () => {
    console.log('connected to mongo')
});

app.use((req,res,next) => {
    console.log(`method: ${req.method}, url: ${req.url}`)
    next()
});

//routes
const userRouter = require('./routes/userRoute')
const contactsRouter = require('./routes/contactsRouter');


app.use('/user', userRouter);
app.use('/contacts', contactsRouter)





const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})