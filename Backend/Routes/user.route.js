const express=require("express")
const userRouter=express.Router()
const { UserModel }=require("../Models/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


userRouter.post("/signup",async (req,res)=>{
    const {name,email,dob,location,password}=req.body;
    if(!/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password) || password.length < 8){
        return res.status(400).json({error:'Pass should contain atleast one uppercase character,one number,one special character,and be atleast 8 characters long.'})
    }
    try{
        bcrypt.hash(password, 5, async (err, hash) => {
            if(err){
                res.status(400).json({error:err.message})
            } else {
                const user=new UserModel({name,email,dob,location,password:hash})
                await user.save()
            }
        })
       res.status(200).json({"msg":"The new user has been registered", "registeredUser":req.body})
    } catch(err){
        if(err.code===11000){
           return res.status(400).json({error:"User with the same email already exists."})
        }
       res.status(400).json({"error":err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err,result)=>{
                if(result){
                    let token=jwt.sign({userID:user[0]._id},"masai")
                    res.status(200).send({"msg":"Logged in","token":token})
                } else {
                    res.status(400).send({"msg":"Wrong credential"})
                }
            })
        } else {
            res.status(400).send({"msg":"Wrong credential"})
        }
    }catch(err){
        res.status(400).send({"msg":"Something went wrong","error":err.message})
    }
    
})

// userRouter.post("/logout",async(req,res)=>{
//     try{
//         const token=req.headers.authorization.split(" ")[1]
        
//         const blacklistedToken=new BlacklistToken({token})
//         await blacklistedToken.save()
//         res.status(200).json({"msg":"Logged out successfully"})
//     } catch(error) {
//         console.log('Error logging out user',error)
//         res.status(400).json({"error":err.message})
//     }
// })

// "name":"Preety",
//   "email":"pr06@gmail.com",
//    "dob":"06/10/1997",
//   "location":"Ranchi",
//   "password":"Preety@6"


module.exports={
    userRouter
}

