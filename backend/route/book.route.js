
const book = require('../book model/book.controller.js');


module.exports = function (app) {
   
    // Create a new book
    app.post("/api/book", book.create);
  
    // show  all book
    app.get("/api/books", book.findAll);
  
    // get  a single book by Id
    app.get("/api/books/:bookId", book.findByPk);
  
    // Update a book with Id
    app.put("/api/books/:bookId", book.update);
  
    // Delete a book with Id
    app.delete("/api/books/:bookId", book.delete);
  };
  


  