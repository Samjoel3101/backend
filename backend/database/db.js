const Sequelize = require('sequelize')
const db = {}


const sequelize = new Sequelize('library' , 'root' , 'Parsengg@4508' ,{
    dialect: 'mysql',operatorsAliases: false,
})

sequelize.authenticate().then(() => {
    console.log('database is connected')
}).catch((err) =>{
    console.log('database is not connected')
})

db.Sequelize = Sequelize
db.Sequelize = sequelize
db.book = require('../book model/book.model.js')(sequelize, Sequelize)

module.exports = db
