const express=require('express')
const app=express();
const cors=require("cors");
const bookRoute=require("./routes/booksRoutes")

require('./connection/conn')
app.use(cors());
app.use(express.json())//data in json m convert krne k liye
app.use("/api/v1",bookRoute);

const PORT=1000;
app.listen(PORT,()=>{
   console.log(`SERVER STARTED SUCCESSFULLY on  ${PORT}`);
})