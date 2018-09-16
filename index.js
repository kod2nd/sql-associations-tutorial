const sequelHelper = require("./src/sequelHelper");
const { sequelize, Sequelize, Player, Team } = sequelHelper;

const createPlayer = async (name, arr) => {
  const player = await Player.create({ name });
  arr.push(player);
  return player;
};
const createTeam = async name => {
  return await Team.create({ name });
};

const startServer = async () => {
  await sequelize.sync({ force: true });
  try {
    const players = [];
    const hover = await createTeam("hover");
    const john = await createPlayer("john", players);
    const wick = await createPlayer("wick", players);

    // players.forEach(player => {
    //   hover.setPlayer(player).then(()=>{console.log("sucessful update")});
    // });

    // await hover.setPlayer(john)
    // await hover.setPlayer(wick)


    await hover.setPlayers(players)


    const teamTable = await Player.findAll({ include: Team });

    console.log("THESE ARE THE PLAYERS", JSON.stringify(teamTable));
  } catch (error) {
    console.log(error);
  }
};

startServer();
