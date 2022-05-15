/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOvaNmJGJ0BCxEpCqAVKnhVAE8T6IPNODaw&usqp=CAU",
    validate:{
      isUrl: true
    }
  },

  gpa: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate:{
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;