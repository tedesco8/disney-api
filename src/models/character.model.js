const sequelize = require("sequelize");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    "user",
    {
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

  Character.hasMany(Film, {as: 'film', foreignKey: 'character_id'});

  return Character;
};
