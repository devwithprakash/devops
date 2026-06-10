import express from "express"

const app = express()

const PORT = process.env.PORT || 8000

app.get("/", (req, res)=>{
    return res.json({message: "Server is healthy v7 hurray 🤩 and deployment done✅"})
})

app.listen(PORT, ()=> console.log(`Server is running on PORT: ${PORT}`))

