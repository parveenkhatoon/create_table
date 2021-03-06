
const express = require('express');
const app = express();
const node_connection = require('./node_connection');

app.get('/',function(req,res){
    res.send("good job!!") 
});


// create database

app.get('/createdb',function(req,res){
    let sql ="CREATE DATABASE parveen";
    node_connection.query(sql,function(err){
        if(err) throw err;
        res.send("Database created successfuly")
        
    });
});

// create table

app.get('/create/student',function(req,res){
    let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    node_connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Table created");
      });
});

// insert data
app.post('/insert/student',function(req,res){
    let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    node_connection.query(sql,function(err,result){
        if(err) throw err;
        res.send("record inserted")
    });
});

app.listen(6000,function(err){
    if(err) throw err;
    console.log(`server is running ${6000}`);
    
});


