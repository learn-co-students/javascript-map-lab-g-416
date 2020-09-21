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

let sortedRobots= [];



robots.map(robot => {
  if (knownDecepticons.includes(robot.name))
  {
    let newBot= Object.assign({}, robot, {alliance: "decepticon"});
    sortedRobots.push(newBot)
  }
  else {
    let newBot= Object.assign({}, robot, {alliance: "autobot"});
    sortedRobots.push(newBot)
  }
})

console.log(sortedRobots)




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

let coloredZebraStripes= [];

console.log(zebraStripes.length)

zebraStripes.map(stripe=> {
  let index= zebraStripes.indexOf(stripe);
    if(index % 2 === 0){
      let definedStripe= Object.assign({}, stripe, {color: "black"})
      coloredZebraStripes.push(definedStripe);
    }
    else {
      let definedStripe= Object.assign({}, stripe, {color: "white"})
      coloredZebraStripes.push(definedStripe);
    }
  }
)

console.log(coloredZebraStripes)
