const {booksDatabase} = require ("../db/bookdb");

//function to add book in the library

function add (item){
    item.id = booksDatabase.length+1;
    booksDatabase.push(item);
    console.log("book added successfully--------------\n");
    console.log(booksDatabase);

}

//function to update book in the library

function update(id, key, value){
    exists = booksDatabase.find(element=>element.id===id);
    console.log(exists);
    if(!exists){
        console.log("the book with such id does not exist");
    }else{
        exists[key]=value;
        console.log("The book is successfully updated----------\n");
        console.log(exists);
    }

}

function updateMany(id, book){
    exists = booksDatabase.filter(element=>element.id===id);
    console.log(exists);
    if(!exists){
        console.log("the book with that id doesn't exist");
    }else{
        for (const key in book) {
            exists[key] = book[key];
        }
        console.log("the book has been successfully updated---------\n");
        console.log(exists);
    }
}

function display(){
    console.log("all the books in the library--------------------------\n");
    console.log(booksDatabase);
}

function remove(id, remains){
    remains = [];
    exists = booksDatabase.filter(element=>element.id===id);
    console.log(exists);
    if(!exists){
        console.log("no book with such id");
    }else{
        remains = booksDatabase.filter(element=>element.id!==id);
        console.log("the book has been successfully removed-------------------\n");
        console.log(remains);
    }
}



module.exports = {
    add,
    update,
    updateMany,
    display,
    remove
}