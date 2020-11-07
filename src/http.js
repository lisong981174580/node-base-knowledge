/* 
 * 第一个 nodejs程序
 */
 const http = require('http');
 const hostname = '127.0.0.1';
 const port = 3000;

// 创建一个 server 实例
const server = http.createServer((req, res) => {
  // req: 请求对象
  // req: 响应对象
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plan');
  res.end('Hello Word')
});

server.listen(port, hostname, () => {
  console.log(`服务启动成功，监听端口: ${port}`)
})
