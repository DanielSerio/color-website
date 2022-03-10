import express, { Application, urlencoded } from 'express'
import { resolve } from 'path'
import cors from 'cors'

const app: Application = express()

app.use(express.static(resolve(process.cwd(), 'public')))
app.set('view engine', 'pug')

app.use(cors())
app.use(urlencoded({ extended: true }))

export default app
