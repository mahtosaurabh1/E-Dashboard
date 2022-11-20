const express = require("express");
require("./db/config");
const app = express();
const cors = require("cors");
const User = require("./db/user");
const addMessage = require("./db/addmessage");

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body);
  if (user) {
    if (user.email) {
      res.send(user);
    }
  } else {
    res.send("user not found");
  }
});

app.post('/add-message', async (req,res)=>{
  let message= new addMessage(req.body);
  let result= await message.save();
  res.send(result);
 
})

app.get('/feed',async (req,res)=>{
  let result=await  addMessage.find();
  if(result.length>0){
    res.send(result);
   }else{
    res.send('result not found')
   }
})

app.listen(5000);
