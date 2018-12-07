const fs=require('fs');
const d=process.cwd()
function mkdirs(dirname) {
  const dirArr=dirname.match(/\/[^/]+/g)
  if(dirArr&&dirArr.length){
    let dirname=d
    dirArr.forEach(dir=>{
      dirname+=dir
      if(fs.existsSync(dirname)) return
      fs.mkdirSync(dirname);
    })
  }
}
module.exports=mkdirs;