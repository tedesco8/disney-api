const sequelize = require("sequelize");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    "character",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      biografy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      create_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      timestamps: false,
    }
  );

  Character.hasMany(Performances, {as: 'performances', foreignKey: 'character_id'});

  return Character;
};
