const { book } = require("../database/db");

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      bookName: {
        type: Sequelize.STRING(100),
      },
      authorName: {
        type: Sequelize.STRING(100),
      },
      description: {
        type: Sequelize.STRING(1000),
      },
      
    }, {
        timestamps: false
    });
    
    Book.sync().then((book) =>{
      console.log('table is created in the database')
    }).catch((err) =>{
      console.log('table is not created ')
    })
  
    return Book;
  };