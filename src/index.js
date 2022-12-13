console.log('Hola mundo')

// https://www.youtube.com/watch?v=3dSkc-DIM74&t=485s

import app from "./app.js"
import { PORT } from './config.js'

app.listen(PORT)

console.log(`Servidor en puerto ${PORT}`)