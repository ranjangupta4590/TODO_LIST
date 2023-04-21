const {Router} =require('express');

const route=Router();

route.get('/',allTodo);
route.post('/',addTodo);
route.post('/update/:id',updateTodo);
route.post('/delete/:id',deleteTodo);

module.exports = route;