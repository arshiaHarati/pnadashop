const express = require("express")
const app = express()
require('dotenv').config()
app.use(express.json())

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
    console.log('connected to db...');
}
const userRouter = require('./routes/user')
app.use('/user',userRouter)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on port ${process.env.SERVER_PORT} ...`);
})

