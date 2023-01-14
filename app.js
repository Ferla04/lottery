import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './src/routes/index.js'
import { boomErrorHandler, error404, errorHandler, logErrors, ormErrorHandler } from './src/middlewares/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 10101

app.use(express.json(), cors())

routes(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(ormErrorHandler)
app.use(errorHandler)
app.use(error404)

app.listen(PORT, () => console.log('Server running in port:' + PORT))
