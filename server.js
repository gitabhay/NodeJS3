const express = require("express");

const app = express();

const port = 4000;

// app.get('/', function(req, res){
// res.send (`<h1> Ex.4 : </h1>
//      <p> Ques.1 Create two middlewares and 4 routes, one middleware should be applied on all the routes 
//      and second middleware should be applied on only two routes. 
//      Routes can be  /about   /home  /contact  /courses. Second middleware should be applied on /home  and /courses.</p>`);

//      res.end()
//     })
    

const middleware1 = (req, res, next)=>{
    console.log("middleware1");
    next()
}


const middleware2 = (req, res, next)=>{
    console.log("middleware2");
    next()
}
app.use(middleware1);


app.get("/",  function(req, res){
    res.send("<h1>Root Page</h1>")
})


app.get('/about', function(req, res){
    res.send("About");
})

app.get('/home', middleware2, function(req, res){
    res.send("Home");
})

app.get('/contact', function(req, res){
    res.send("Contact");
})

app.get('/course', middleware2 function(req, res){
    res.send("Course");
})

// app.get('/home', function(req, res){
//     res.send("Home");
// })

// app.get('/course', function(req, res){
//     res.send("Course");
// })

app.listen(port)
