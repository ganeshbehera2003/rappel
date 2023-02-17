const express = require('express');
const { dbConn } = require('./config/db');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/course');
const app = express();
const cors = require('cors');

const port = 4001;

app.use(express.json());
app.use(cors());


app.use('/user',userRoutes);
app.use('/product',productRoutes);

dbConn();
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})