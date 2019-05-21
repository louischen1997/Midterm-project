const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Music = require('./todo.model');
let db = mongoose.connection;


let chillarray = []
let cigarettearray = []


db.once('open', async () => {
 await console.log('db connect')
 await db.collection('todos').find().toArray(function (err, items) {
     if(items.musictype="chill"){
        chillarray.push(...items)
     }
     if(items.musictype="cigarette"){
        cigarettearray.push(...items)
     }
     
    })
})

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://b04505007:julia_1024@cluster0-6qwrr.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
    
})


todoRoutes.route('/chill/:id').get(function(req, res) {
    res.json(chillarray)
       
});


todoRoutes.route('/cigarette/:id').get(function(req, res) {
    res.json(cigarettearray)
       
});






todoRoutes.route('/chill').get(function(req, res) {
    res.json(chillarray)
       
});

todoRoutes.route('/cigarette').get(function(req, res) {
    res.json(cigarettearray)
       
});
todoRoutes.route('/chill/:id').post(function(req, res) {
  
    let music=new Music(req.body);
     
    music.save()
    .then(music => {
                res.status(200).json({ 'toda': +music });
            })    
});

todoRoutes.route('/cigarette/:id').post(function(req, res) {
  
    let music=new Music(req.body);
     
    music.save()
    .then(music => {
                res.status(200).json({ 'toda': +music });
            })    
});





todoRoutes.route('/chill').post(function(req, res) {
   
    let music=new Music(req.body);
     
    music.save()
    .then(music => {
                res.status(200).json({ 'toda': +music });
            })
});


todoRoutes.route('/cigarette').post(function(req, res) {
   
    
    let music=new Music(req.body);
     
    music.save()
    .then(music => {
                res.status(200).json({ 'toda': +music });
            })
});
app.use('/', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});