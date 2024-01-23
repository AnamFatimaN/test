const express=require('express')
const app=express('express')
const port=3002
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    
    res.render('pages/login',{error:null})
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    const users=[{username:"anam",password:"1234"},
    {username:"ali",password:"abcd"},
    ]

    const{username,password}=req.body;
    const user=users.find(user=>user.username===username&&user.password===password)
    if(user){
        res.render('pages/welcome',{username})}
        else{
            res.render('pages/login',{error:"Invalid Username or Password"})
        }
})


app.listen(port,()=>{
console.log(`app listening at the ${port}`)
})