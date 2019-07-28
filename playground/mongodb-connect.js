const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewURLParser: true}, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb Server');
  
  
  db.collection('Todos').insertOne({
    text: 'something todo',
    completed: false       
},(err, result) => {
    if(err){
    return console.log(err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
});
  db.collection('Users').insertOne({
    name: 'Aniket',
    age: 22,
    location: 'Mohali'
  },(err, result) => {
    if(err){
      return console.log(err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
