const express = require("express");
const app = express();
app.use(express.json());
app.get("/api/health", (req,res)=>res.json({success:true, app:"SWYNEX ExpenseTrack"}));
app.post("/api/expenses", (req,res)=>res.json({success:true, expense:req.body}));
app.listen(5000, ()=>console.log("SWYNEX Server on 5000"));
