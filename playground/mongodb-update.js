const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewURLParser: true}, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb Server');
  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5d3d6a9dbeb31f037a6800fb'),
  },{
    $set: {
      completed: true
    }},
      {
        returnOriginal: false
  }).then((result) => {
      console.log(result);
  });

db.close();
});