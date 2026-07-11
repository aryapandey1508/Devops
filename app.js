let express = require('express');
let app = express();
let port = 9000;

let cors = require('cors');
app.use(cors());
app.get('/ping',(req,res)=> {
    res.send({
        message :'hello, world!, welcome to gym'
    });
});
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});