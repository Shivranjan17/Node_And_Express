

import express from "express"
const app = express();//create app using express object
const port = 3000;

app.get ("/",(req,res)=>
    {
        res.send("Jay Ganesh Jay Gajanan Har Har Mahadev")
        //console.log(req);
        //console.log(req.rawHeaders);
    });

app.listen(port,()=>{//method called .listen //3000 -> port location of a server where we are listning from the client side
    console.log(`Server running on port ${port}.`);//callback fuctiion that will be going to triggered when our server is set up
});