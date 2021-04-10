const sequelize = require("sequelize");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Performances = sequelize.define(
    "performances",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      character_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model: "character",
          key: "id",
        },
      },
      film_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model: "film",
          key: "id",
        },
      },
      create_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );

  return Performances;
};
