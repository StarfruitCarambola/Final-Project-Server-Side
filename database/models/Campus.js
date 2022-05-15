/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOvaNmJGJ0BCxEpCqAVKnhVAE8T6IPNODaw&usqp=CAU",
    validate: {
      isUrl: true
    }
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }
});

// Export the campus model
module.exports = Campus;