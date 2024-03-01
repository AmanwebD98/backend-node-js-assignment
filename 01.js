// const http = require('http')
// const server = http.createServer((req, res)=> {
//     if (req.url == '/hello'){
//         res.end('hello students')
//     }
//     else {
//         res.writeHead(404)
//         res.end('Please use the right server')
//     }
// })
// const PORT =4000
// server.listen(PORT, () => {
//     console.log('server is started on : ',PORT)
// })


// //3.
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//        res.end('hello-world')
//     }
//     else {
//         res.end('Page not found')
//     }
// })
// const PORT = 5000
// server.listen(PORT, () => {
//     console.log(`Server is started on the ${PORT}`)
// })




// //2.
// const fs = require('fs')
//  fs.readFile('input.txt',(err, content)=> {
//      if (err) {
//          return err;
//      }
//      else {
    
//          console.log('Operation is successful  ' + content)
//      }
//  })


// fs.writeFile('output.txt', 'hello students', (err) => {
//      console.log(err)
//  })

// 4.
// const os = require('os')
// console.log(os.platform())
// console.log(os.version())

// 5.
// const path = require('path')
// const newPath = path.join('/home/user', 'hello', 'newfile.txt')
// console.log('new path is :', newPath)


6.