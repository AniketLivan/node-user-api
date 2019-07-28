const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5d3d8e25daf1c6187969df98';

if(!ObjectID.isValid(id)){
    console.log('Invalid Id');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));