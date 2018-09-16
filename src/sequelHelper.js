const Sequelize = require("sequelize");
require("dotenv").config();
const { DB_DATABASENAME, DB_USERNAME, DB_PASSWORD } = process.env;
const PlayerModel = require("./models/PlayerModel");
const TeamModel = require("./models/TeamModel");

const sequelize = new Sequelize(DB_DATABASENAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres"
});

// Models

const Player = PlayerModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);

// Assocations / Relations
Player.belongsTo(Team, { foreignKey: "team_id" });
Team.hasMany(Player, { foreignKey: "team_id" });

module.exports = {
  sequelize,
  Sequelize,
  Player,
  Team
};
