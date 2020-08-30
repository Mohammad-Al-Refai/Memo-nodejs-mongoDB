 const express = require('express');
 const {add,deletes,update,all}=require('./db')
 const app=express()
 const bodyparser=require('body-parser')
app.use(bodyparser.json())


app.get("/",(req,res)=>{
all(data=>{
  res.send(data)
})
})
app.post("/add",(req,res)=>{
  let title=req.body.title
  let text=req.body.text
  console.log(req.body)
  add(title,text)
  res.send({state:200})
})


app.delete("/delete",(req,res)=>{
  let id=req.body.id
  deletes(id)
  res.send({state:200})
})

app.put("/update",(req,res)=>{
  console.log(req.body)
  let title=req.body.title
  let text=req.body.text
  let id=req.body.id
  update(id,title,text)
  res.send({state:200})
})


app.listen(3000)
console.log("...")