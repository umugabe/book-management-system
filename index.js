const {add, update, updateMany, display, remove} = require ("../src/controller/bookController");

let addbook = {

     title: 'How to know your purpose',
     author: 'Munroe Myles',
     year: 2000 

};

add(addbook);

update(1, 'title', 'the worst gatsby');

let updatebook ={

    id: 2, 
    title: 'do not kill mockinbird', 
    author: 'Lee', 
    year: 1960 
}

updateMany(2, updatebook);

display();

remove(3);