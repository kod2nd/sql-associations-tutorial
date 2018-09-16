const PlayerModel = (sequelize, DataTypes) => {
    return sequelize.define("player", {
        name: DataTypes.STRING
    })
}

module.exports = PlayerModel