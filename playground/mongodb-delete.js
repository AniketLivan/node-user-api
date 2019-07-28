const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewURLParser: true}, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb Server');
//   db.collection('Todos').deleteOne({text:'something todo'}).then((result) => {
//       console.log(result);
//   });
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
     console.log(result); 
  });

db.close();
});