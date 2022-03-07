const db = require('../database/db.js')

const Book = db.book

exports.create = (req,res) =>{
    Book.create({
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        description: req.body.description,
        
    }).then((book) =>{
        res.status(200).json({
            status: true,
            Message: "Book is created successfully "
        })
    })
}

// Get all books
exports.findAll = (req, res) => {
    Book.findAll().then((books) => {
      res.status(200).json({
        status: true,
        data: books,
      })
    })
}

// Find a book by Id
exports.findByPk = (req, res) => {
    Book.findByPk(req.params.bookId).then((book) => {
      res.status(200).json({
        status: true,
        data: book,
      })
    })
  }
  
  // Update a book
  exports.update = (req, res) => {
    const id = req.params.bookId;
    Book.update(
      {
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        description: req.body.description,
      },
      { where: { id: req.params.bookId } }
    ).then(() => {
      res.status(200).json({
          status: true,
          message: "Book updated successfully with id = " + id
      })
    })
  }
  
  // Delete a book by Id
  exports.delete = (req, res) => {
    const id = req.params.bookId;
    Book.destroy({
      where: { id: id },
    }).then(() => {
      res.status(200).json({
          status: true,
          message: "Book deleted successfully with id = " + id
      })
    })
  }
  