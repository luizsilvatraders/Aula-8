const http = require('http')
const porta = 443

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'content-type':'text/html'})
  if(req.url=='/'){
    res.write('<h1>Seja bem vindo usuário Luizao </h1>')
  }else if(req.url=='/server'){
     res.write('<h1>server uruário Luizao </h1>')
  }else if(req.url=='/server/node'){
     res.write('<h1>server node uruário Luizao </h1>')
  }else{
    res.write('<h1>Padrão</h1>')
  }
  res.end()
})

servidor.listen(porta, ()=> {console.log('servidor rodando')})