const express = require('express');
const app = express();
app.use(express.urlencoded({extended:  true}));  
let tasks = [
    'sample task'
]
app.get('/',(req,res)=>{
    let tasklist = tasks.map(t => `<li>${t}</li>`).join("\n");
    res.send(`
          <html>
          <body>
                <form action ="/" method = "POST" >
                    <input name ="newtask" >
                    <button type ="submit">ADD</button>
                </form>
                <ul>
                    ${tasklist}   
                
                </ul>
          </body>
          </html>
    `)
})
app.post('/', (req,res)=>{
    // res.send('new task added = ' + req.body.newtask);
    tasks.push(req.body.newtask);
    res.redirect('/');
})
app.listen(5555,()=>{
    console.log('started');
})