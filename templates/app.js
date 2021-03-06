const express = require('express')
const bodyParser = require('body-parser')
// 设置handlebar作为视图解析引擎
const {engineName, viewEngine} = require('./utils/handlebar')
const route = require('./route/route')

const app = new express()

// 解析post的body部分
app.use(bodyParser())

// 设置使用handlebars作为视图引擎
app.engine(engineName, viewEngine)
app.set('view engine', engineName)

// 设置静态文件
app.use(express.static(__dirname + '/public'))

// 应用路由
app.use('/', route)

const port = '9000'
app.listen(port)

console.log(`Express 4.5 running at http://localhost:${port}`)
console.log('Press Ctrl + C to stop the service.')