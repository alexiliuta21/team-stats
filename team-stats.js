const team = {
  _players: [{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}, {
  firstName: 'Danni',
  lastName: 'Potato',
  age: 13
}, {
  firstName: 'Pato',
  lastName: 'Feo',
  age: 10
}],
  _games:  [{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}, {
  opponent: 'Dallas Cowboys',
  teamPoints: 22,
  opponentPoints: 24
}, {
  opponent: 'LA Raiders',
  teamPoints: 50,
  opponentPoints: 34
}],
    
get players () {
  return this._players;
},

get games () {
  return this._games;
},
  
addPlayer (firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
},

addGame (opponentName, teamPoints, opponentPoints){
  let game = {
    opponentName: opponentName,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };
  
  this.games.push(game);
}
};

team.addPlayer ('Steph', 'Curry', 28);
team.addPlayer ('Lisa', 'Leslie', 44);
team.addPlayer ('Bugs', 'Bunny', 76);

team.addGame ('Kansas City Chiefs', 50, 38);
team.addGame ('Seattle Seahawks', 60, 44);
team.addGame ('Green Bay Packers', 29, 26);

console.log(team._players);
console.log(team._games);

