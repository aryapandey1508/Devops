let express = require('express');
let app = express();
let port = 9000;

let cors = require('cors');
app.use(cors());g
app.get('/ping',(req,res)=> {
    res.send({
        message :'hello, world!'
    });
});
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});