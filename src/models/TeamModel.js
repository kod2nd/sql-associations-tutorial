const TeamModel = (sequelize, DataTypes) => {
    return sequelize.define("team", {
        name: DataTypes.STRING
    })
}

module.exports = TeamModel