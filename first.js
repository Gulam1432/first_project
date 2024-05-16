const http = require('node:http');
 const hostname = '127.0.0.1';
 const port = 3000;
 const server = http.createServer((req, res) => {
  res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          div{
             height: 208px;
              width: 500px;
              border: 1px solid black;
              
          }
  
          button{
              
             background-color: blueviolet;
               color: antiquewhite;
              border: 0.5px solid black;
              border-radius: 5px;       
           }
           .a{
              background-color: aqua;
              color: blanchedalmond;
  
         }
           
          
       </style>
      
   </head>
   <body>
    <div>
      <h1>This is paragraph of node js</h1>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, at. Veritatis aliquid consequuntur maiores quo? Magni officiis voluptatum, optio autem dolor quam qui laboriosam fuga error at perferendis deleniti culpa, nam quos nihil, natus quidem. Ullam corporis quis, numquam, quisquam enim veniam corrupti iure velit, ea expedita non beatae adipisci?</p>
     <button>Click me</button>
     <button class="a">Forget the Password</button>
     </div>
  
      <script src="first.js"></script>
      
  </body>
   </html>`);
 });
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
// for(let i=1;i<=10;i++){
// if(i%2===0){
//   console.log("i="+i);
// }
// }