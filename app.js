const express = require("express")
const app = express()
let port = 8080
const path = require("path") //for ejs

app.set("view engine","ejs")    //for ejs 
app.set("views",path.join(__dirname,"/views")) //for ejs


app.use(express.static(path.join(__dirname,"public"))) //for serving static files

app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.listen(port,(req,res)=>{
    console.log(`app is listening at the port ${port}`)
})