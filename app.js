import express from 'express'
import products from './src/routes/products.router.js'
import './src/config/dbConfig.js'
import cors from 'cors'

const app = express()
const PORT = 8080

app.use(express.json());
app.use(cors())

app.use('/api/products', products)

app.listen(PORT, () => {
    console.log(`Listenin to port ${PORT}`);
})