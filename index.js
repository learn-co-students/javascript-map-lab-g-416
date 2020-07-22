const knownDecepticons = ["Megatron", "Skywarp", "Laserbeak", "Barricade"];

const robots = [
  { name: "Bumblebee", alliance: null },
  { name: "Laserbeak", alliance: null },
  { name: "Barricade", alliance: null },
  { name: "Optimus Prime", alliance: null },
  { name: "Skywarp", alliance: null },
  { name: "Megatron", alliance: null },
  { name: "Ironhide", alliance: null },
  { name: "Ratchet", alliance: null },
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

const sortedRobots = robots.map((robot) => {
  let newRobot;
  if (knownDecepticons.includes(robot.name)) {
    newRobot = Object.assign({}, robot);
    newRobot.alliance = "deception";
  } else {
    newRobot = Object.assign({}, robot);
    newRobot.alliance = "autobot";
  }
  return newRobot;
});

const coloredZebraStripes = zebraStripes.map((stripe, index) => {
  const isEven = function (x) {
    return !(x & 1);
  };
  let newStrip;
  if (isEven(index)) {
    newStrip = Object.assign({}, stripe);
    newStripe.color = "black";
  } else {
    newStrip = Object.assign({}, stripe);
    newStripe.color = "white";
  }
  return stripe;
});
