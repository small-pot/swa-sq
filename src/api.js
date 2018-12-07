const request=require('./tools/request')
const fs=require('fs')
const path=require('path')
const mkdirs=require('./tools/mkdirs')
const d=process.cwd()

// program
//   .version('0.0.1')
//   .option('-u, --url [value]','dfsfs',function (a) {
//     console.log(123,a)
//   })
//   .parse(process.argv);

module.exports=function(){
  const config=require(d+'/swa.config.js')
  const URL=config.url;
  request({method:'get', url:URL+config.pathname}).then(body=>{
    const data=JSON.parse(body)
    for(let url in data.paths){
      const item=data.paths[url]
      for(let method in item){
        request({
          method,
          url:URL+url
        }).then(body=>{
          const dirname=`/mock/${method}${path.dirname(url)}`
          mkdirs(dirname)
          const extname=path.extname(url);
          let data=''
          if(typeof body==='string'){
            data=JSON.stringify(JSON.parse(body),null,2)
          }else{
            data=JSON.stringify(body,null,2)
          }
          fs.writeFile(`${d}/mock/${method}${url}.json`,data,function (err) {
            err&&console.error(err)
          })
        })
      }
    }
  })
}
