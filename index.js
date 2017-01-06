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
  { width: 7.31, color: null },
];

const sortedRobots = robots.map(function (robot) {
  var ally = 'autobot';
  if (knownDecepticons.includes(robot.name)) {
    ally = 'decepticon';
  };
  return Object.assign({}, robot, {
    name: robot.name,
    alliance: ally,
  });
});

const coloredZebraStripes = zebraStripes.map(function (stripe, i) {
  var stripe_color = 'white';
  if (i % 2 === 0) {
    stripe_color = 'black'
  };
  return Object.assign({}, stripe, {
    width: stripe.width,
    color: stripe_color,
  });
});
