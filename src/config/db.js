import { Sequelize } from "sequelize";

import Work from "../work/model/work.js";

const connectDb = () => {
  try {
    let sequelize = new Sequelize(
      "management_work_list_db",
      "root",
      "password95",
      {
        host: "localhost",
        dialect: "mysql",
        logging: false,
      }
    );

    let db = {
      models: {},
    };

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.models.Work = Work(sequelize);

    return db;
  } catch (error) {
    console.log(error);
  }
};

let db = connectDb();
export default db;
