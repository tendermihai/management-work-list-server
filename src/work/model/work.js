import { Sequelize, DataTypes } from "sequelize";

export default (sequelize) => {
  class Work extends Sequelize.Model {}

  Work.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a title name",
          },

          notEmpty: {
            msg: "Provide a title name",
          },
        },
      },

      image: {
        type: DataTypes.BLOB,
        allowNull: true,
      },

      link: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a link",
          },
        },

        notEmpty: {
          msg: "Provide a link",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Work;
};
