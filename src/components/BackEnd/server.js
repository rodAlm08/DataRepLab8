//this is a different way to import using REQUIRE
const express = require('express')
const app = express()
const port = 4000//this is the port that the app will be listening 
const bodyParser = require('body-parser') //it will parse the data 

// getting-started.js
// mongoose will be imported
//it will allow us to connect to my database
const mongoose = require('mongoose');

main().catch(err => console.log(err));//will make the connection with the database

async function main() {
  //connection string from our cloud mongodb database will tell exaclty where to connect
  //username admin
  //my password is admin
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.qaq4ckt.mongodb.net/?retryWrites=true&w=majority');
  
}

//create the book schema that will contain title, cover and author all in STRING type
const bookSchema = new mongoose.Schema({
  title: String,
  cover:String,
  author:String
});

//now we need to generate a model
//its an object that will be used to interact to the database
const bookModel = mongoose.model('books', bookSchema);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//we will get a CORS error on the browser because its blocking a connection
//from host to the other 
//this will allow to allow the connection 
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//http request will come in and will be handled by the two arguments req (request) and res (response) and 
//using the callback function will send back the response
app.get('/api/books', (req, res)=>{
  //to interact to my database has to call the model
  bookModel.find((error, data)=>{
    res.json(data);

  })


})

//post will put the data embeded body
//is a more secure way to send secure data over the web as it wont be displayed on the url
//if we dont do the post to listen to the request from /api/books on the server side will get error 404
app.post('/api/books', (req,res) =>{
  //console.log(req.body)
  //instead of console the data we will write it to my mongodb database
  //once we filled in our front end app it be send to the database using .create
  //it will create in the database
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })

  res.send('Data recieved');

})

//to overide the methos
app.put('/api/book/:id', (req, res)=>{
  console.log("Update: " + req.params.id);//pull the id out of url 
  //how I interact with my database
  bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error, data)=>{
      res.send(data);
    })
  })


//will pass the id on the url : means that is a paramater I am passing up
app.get('/api/book/:id',(req, res)=>{
  console.log(req.params.id);

  //to search in database. FInd a document with the following id that was passed on the url
  //I don't have the front setup for this
  //to check go to localhost:4000/api/book/ and paste the id
  bookModel.findById(req.params.id, (error, data)=> {
    res.json(data);
  })
})

//the server is going to listen for a request for url on the port 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



