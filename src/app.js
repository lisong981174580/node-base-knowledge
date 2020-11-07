const express = require('express');

// 创建一个 app 实例
const app = express();
app.use(express.urlencoded())
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/home/:id?', (req, res) => {
  console.log(req);

  console.log('========get query', req.query);
  console.log('========get params', req.params);
  console.log('========get body', req.body);
  res.json(req.query)
})

app.post('/home/:id?', (req, res) => {
  console.log('========post query', req.query);
  console.log('========post body', req.body);
  console.log('========post params', req.params);

  res.json(req.body)
})


app.listen(3000, () => {
  console.log('启动成功，监听 3000端口')
})