const express = require("express")
const app = express()
let port = 8080
const path = require("path")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.listen(port,(req,res)=>{
    console.log(`app is listening at the port ${port}`)
})