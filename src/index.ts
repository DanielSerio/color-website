import { createServer } from 'http'
import app from './router'

const PORT: number = 4000
const reload = require('reload')
const server = createServer(app)

function onError (e: unknown): void {
  const error: Error = e as Error
  console.table({ message: error.message, name: error.name })
  process.exit(1)
}

function onSuccess (): void {
  server.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}/color/random`))
}

reload(app)
  .then(onSuccess)
  .catch(onError)
