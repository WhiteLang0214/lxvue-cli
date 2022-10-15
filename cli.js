#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '你的项目名称：'
  }
]).then(anwsers => {
  // 读取模版目录 当前目录
  const tmplDir = path.join(__dirname, 'templates')
  // 目标目录：运行命令行的目录
  const destDir = process.cwd()

  // 将模版下的文件全部复制到目标目录
  fs.readdir(tmplDir, (err, files) => {
    if (err) throw err
  
    files.forEach(file => {
      // 通过模版引擎渲染文件
      ejs.renderFile(path.join(tmplDir, file), anwsers, (err, result) => {
        if (err) throw err
        // 将结果写入目标文件路径
        fs.writeFileSync(path.join(destDir, file), result)
      })
    })
  })
})