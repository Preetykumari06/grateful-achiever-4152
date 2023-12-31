const express=require("express")
const connection=require('./db')
const { userRouter } = require("./Routes/user.route")
require('dotenv').config()


const app=express()
app.use(express.json())

app.use("/users",userRouter)



app.get("/", (req,res)=>{
    res.status(200).json({"msg":"Welcome"})
})




app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log(err)
        console.log("Not connected")
    }
    console.log(`Server is running on port ${process.env.port}`)
})










