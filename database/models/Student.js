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
    defaultValue:"https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png",
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