const express=require('express');
const app=express();

const PORT=8080;

// const cors=require('cors');
// app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
  res.json({
      'pp':'done h bhaii'
  })
})

app.listen(PORT,()=>{
    console.log(`Server listening to PORT:${PORT}`);
})
