require('dotenv').config();
const express = require("express")
const app = express()
let port = 8080
const path = require("path") //for ejs
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.set("view engine","ejs")    //for ejs 
app.set("views",path.join(__dirname,"/views")) //for ejs


app.use(express.static(path.join(__dirname,"public"))) //for serving static files
app.use(bodyParser.urlencoded({ extended: true }));  // Middleware to parse form data


const transporter  = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
});

app.post("/send-email",(req,res)=>{
    const {name,email,message} = req.body

    const mailOptions = {
        form:email,
        to:process.env.EMAIL_RECIPIENT,
        subject:`Message form ${name}`,
        text:`Name:${name}\n Email:${email}\n Message:${message}`
    }
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(`Error Occured:${error.message}`)
    }
    else{
        console.log(`Mail sent succesfully`+ info.response)
        res.redirect("/")
    }
})
});
  

app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.listen(port,(req,res)=>{
    console.log(`app is listening at the port ${port}`)
})