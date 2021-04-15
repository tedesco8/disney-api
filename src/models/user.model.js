const Sequelize = require("sequelize");
const sequelize = require("../config/database");

  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      create_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      token_change_password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at_token_change: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  module.exports = User;
