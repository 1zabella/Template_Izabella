const express = require("express")
const path = require("path")
const port = 3000 
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/",(req,res)=>{ 
    res.render("index")
})

app.listen(3000,()=>{
    console.log("servidor iniciado na porta http://localhost:3000/")
})