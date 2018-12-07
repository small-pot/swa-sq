const request=require('request')
module.exports=function (opt) {
  return new Promise((resolve,reject)=>{
    request(opt,((err,res,body)=>{
      if(err){
        reject(err)
      }else{
        if(res.statusCode===200){
          resolve(body)
        }else{
          const data=`{"code":${res.statusCode},"success":false,"message":"请求失败","data":"error"}`
          resolve(data)
        }
      }
    }))
  })
}