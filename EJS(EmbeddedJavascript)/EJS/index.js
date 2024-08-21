import express from "express";
const app = express();
const port = 3000


app.get ("/",(req,res)=>{
    const today = new Date()
    const day = today.getDay()//getday method 
    //console.log(day);


    let type = "a WeekDay";
    let adv = "it's time to work hard";
    if (day ===  0|| day ===6){
        type = "a Weekend";
        adv = "its time to have fun";
    }
    res.render("index.ejs",{
        dayType : type,
        advice : adv,
    });
});


app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});