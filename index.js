const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

// Create a new variable called sortedRobots; []
// The value of this variable is the mapped robots array; []
// Return each robot object with the alliance filled in with either an 'autobot' or 'decepticon' string. []
// To figure out a robot's alliance, check if their name exists in the knownDecepticons array. 
// (Hint: use Array.prototype.includes to easily check if an element exists in an array.) []
// The original objects in the robots array must not be modified, so be sure to use Object.assign() defensively update []

