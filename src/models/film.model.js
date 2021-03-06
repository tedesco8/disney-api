const sequelize = require("sequelize");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define(
    "film",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Movie",
      },
      character_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: "character",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reputation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
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

  Film.hasMany(Performance, {as: 'performance', foreignKey: 'film_id'});

  return Film;
};
