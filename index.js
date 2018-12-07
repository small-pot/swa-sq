#!/usr/bin/env node
const program = require('commander');
const fs=require('fs')
const d=process.cwd()
program
  .version('0.0.1')
  .option('-i, --url [value]','init',addConfig)
  .option('-u, --update','update',require('./src/api'))
  .option('-s, --server','open sever',require('./src/server'))
  .parse(process.argv);

function addConfig(url) {
  const config={
    port:1212,
    url:url||'',
    pathname:'/v2/api-docs',
    path:d.replace('\\','/'),
  }
  fs.writeFileSync(d+'/swa.config.js','module.exports='+JSON.stringify(config,null,2))
}