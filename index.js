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

const sortedRobots = robots.map(function (robot) {
const isDecepticon = knownDecepticons.includes(robot.name);
  return Object.assign({}, robot, {
    alliance: isDecepticon ? 'decepticon' : 'autobot'
  }); 
});

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

const coloredZebraStripes = zebraStripes.map(function (zebraStripe, index){
  // console.log(index, index % 2 ===0, zebraStripes)
  return Object.assign({}, zebraStripe, {
    color: index % 2 === 0 ? 'black' : 'white'
  })
  
});


// Create a new variable called coloredZebraStripes;
// The value of this variable is the mapped zebraStripes array;
// Return each stripe object with the stripe filled in with either a 'black' or 'white' string.
// A stripe is black when the stripe's index is even, and it's white if a stripe's index is odd.
// (Hint: the callback we pass to .map() takes more than one parameter)
// The original objects in the zebraStripes array must not be modified, so be sure to use Object.assign()


// Create a new variable called sortedRobots; [x]
// The value of this variable is the mapped robots array; [x]
// Return each robot object with the alliance filled in with either an 'autobot' or 'decepticon' string. [x]
// To figure out a robot's alliance, check if their name exists in the knownDecepticons array. 
// (Hint: use Array.prototype.includes to easily check if an element exists in an array.) [x]
// The original objects in the robots array must not be modified, so be sure to use Object.assign() defensively update [x]
