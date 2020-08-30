const mongodb = require('mongodb');
const e = require('express');
let URI="mongodb://localhost/MEMO"
let MongoClient=mongodb.MongoClient.connect(URI,{useUnifiedTopology: true})


function add(title,text){
  let ID=Math.floor(Math.random()*1000)+"X"+Math.floor(Math.random()*1000)+"F"+Math.floor(Math.random()*1000)+"Q"
  MongoClient.then((db)=>{
    db.db("MEMO").collection("memo").insertOne({id:ID,title:title,text:text})
  })
}

function update(id,title,text){
  MongoClient.then((db)=>{
    db.db("MEMO").collection("memo").updateOne({id:id}, {$set:{title:title,text:text}},(err,res)=>{
        if(err){
            console.log(err)
        }
    })
  })
}

function deletes(id){
  MongoClient.then((db)=>{
    db.db("MEMO").collection("memo").deleteOne({id:id})
  })
}

function all(data){
    MongoClient.then((db)=>{
      db.db("MEMO").collection("memo").find({}).toArray((err,items)=>{
          data(items)
      })
    })
  }
  

module.exports={add,update,deletes,all}