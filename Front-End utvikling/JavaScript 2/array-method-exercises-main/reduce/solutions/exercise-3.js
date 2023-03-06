/*
Exercise 3: Turn an array of values into a set of object keys

Store a team's score in an object, using the team's name as the key. Only
store the score if they were a winner ('isWinner').

An array of teams ('teams') has been provided for it. Each item is an object
with the the team's name ('name'), the team's score ('score') and if they
were a winner ('isWinner')

Tip: Set the initial value as an empty object {}

Tip: Use square brackets to set the teams name

Tip: Use 'toLowerCase()' when setting the team's key

*/

const teams = [
  {
    name: 'Hawks',
    score: 60,
    isWinner: true,
  },
  {
    name: 'Dolphins',
    score: 50,
    isWinner: true,
  },
  {
    name: 'Falcons',
    score: 90,
    isWinner: false,
  },
  {
    name: 'Bears',
    score: 90,
    isWinner: false,
  },
];

const winningTeams = teams.reduce((currentTeams, { name, score, isWinner }) => {
  // We first check if the team was a winning team
  if (isWinner) {
    // We now set the key of the object using the team's name, and then set the
    // score for the value
    currentTeams[name.toLowerCase()] = score;
  }
  return currentTeams;
}, {});

// The example below doesn't destructure the team namew which makes it arguably
// a bit more harder to read
// const winningTeamsExtended = teams.reduce((currentTeams, team) => {
//   if (team.isWinner) {
//     currentTeams[team.name.toLowerCase()] = team.score;
//   }
//   return currentTeams;
// }, {});

console.log(winningTeams);
