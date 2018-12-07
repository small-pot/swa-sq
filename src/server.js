const express=require('express');
const d=process.cwd()

module.exports=function(){
  const config=require(d+'/swa.config.js')
  const app=new express()
  app.use((req,res)=>{
    const method=req.method.toLowerCase();
    const url=req.url+'.json';
    const data=require(d+'/mock/'+method+url)
    res.send(data)
  })
  app.listen(config.port)
}