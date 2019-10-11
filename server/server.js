const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongo = require("mongodb");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/api/user", function (req, res) {
    MongoClient.connect(url,{ useUnifiedTopology: true , useNewUrlParser: true }, function (err, client) {
        var db = client.db("ng");
        db.collection("users").find().toArray(function (err, result) {
            res.json(result);
        });
    });
});

app.post("/api/user", function(req, res) {
  console.log(req.body);
  MongoClient.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true },function(err, client) {
      var db = client.db("ng");
      if (err) throw err;
      db.collection("users").insertOne(req.body, function(err, res) {
        if (err) throw err;
      });
    }
  );
});

app.delete("/api/user", function (req, res) {
  console.log(req.query);
    MongoClient.connect(url,{ useUnifiedTopology: true , useNewUrlParser: true }, function (err, client) {
        var db = client.db("ng");
        db.collection("users").deleteOne({ _id: new mongo.ObjectId(req.query.id) },function (err, result) {
          console.log("Deleted");
        });
    });
});


app.listen(3000, function () {
console.log("Server Running at Port 3000");
});

