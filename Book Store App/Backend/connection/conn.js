// //connecting mongodb
// const mongoose=require('mongoose')
// mongoose
//     .connect(
//     "mongodb+srv://priyanka0705:Kashish%4091806@cluster0.nzyiiu8.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>console.log("connected"));


const mongoose = require('mongoose');

const uri = 'mongodb+srv://priyanka1075:Kashish%4091806@cluster0.tsyowue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));
