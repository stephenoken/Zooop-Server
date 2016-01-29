"use strict";

const express = require("express");
const app = express();
const port = process.argv[2];

console.log(port);

app.get("/",(req,res)=>{
  res.send("Hello from Zooop");
});

app.listen(port||80,()=>{
  console.log(`Zooop is now running on port ${port||80}`);
});
