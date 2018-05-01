const{ObjectID} = require('mongodb');

const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// 


Todo.findOneAndRemove({_id: '5ae7fd09e8971303d3c36b61'}).then((todo) => console.log(todo));
// Todo.findByIdAndRemove('5ae7fbbd6de11303d02e7c52').then((todo) => {
//     console.log(todo);
// });