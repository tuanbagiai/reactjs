const path = require('path');
const express = new require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));
app.get('*',(req, res)=>{
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(5000,() => {
    console.log('Server is up!');
});