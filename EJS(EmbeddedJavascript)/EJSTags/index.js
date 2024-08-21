import express from "express"
const app = express();
const port = 3000

app.get("/",(req,res)=>{
    const data= {
        title:"EJS Tags ",
        seconds:new Date().getSeconds(),
        items:["apple","banana","Pinepple","cherry"],
        htmlContent :"<strong> This is some strong text."
    };
    res.render("index.ejs",data);

});


app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});