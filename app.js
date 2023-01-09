import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './src/routes/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 10101

app.use(express.json(), cors())
routes(app)

app.listen(PORT, () => console.log('Server running in port:' + PORT))
