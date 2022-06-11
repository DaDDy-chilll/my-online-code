const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.param('id',(req,res)=>{
  res.send('hello param');
});
app.get('/home/:id',(req,res)=>{
  res.send('hello second line');
})
app.listen(3000, () => {
  console.log('Server is running on Port : 30000');
});