const express = require("express")
const app = express()
require('dotenv').config()
const authMiddleware = require('./middlewares/auth')
const userRouter = require('./routes/user')

app.use(express.json())
app.use(authMiddleware)

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
    console.log('connected to db...');
}
app.use('/user',userRouter)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on port ${process.env.SERVER_PORT} ...`);
})

