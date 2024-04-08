import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import multer from 'multer'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(multer)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
