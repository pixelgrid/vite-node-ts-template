import express from 'express'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const app = express()
const PORT = 3000

app.get("/", async (_, res) => {
    res.json({it: "works"})
})

if (import.meta.env.PROD) {
    app.listen(PORT)
    console.log(`app listening on port: ${PORT}`)
}

export const viteNodeApp = app
