const {ObjectID} = require('mongodb');

const {moongose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5ae54c310524bf0a69fc0d56';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));