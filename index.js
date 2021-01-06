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

const sortedRobots = robots.map(function (r) {
  if (knownDecepticons.includes(r.name)) {
    return Object.assign({}, r, {alliance: 'decepticon'})
  }else{
    return Object.assign({}, r, {alliance: 'autobot'})
    }
  })

const coloredZebraStripes = zebraStripes.map(function (z){
  if (z.width * 100) % 2 == 0 ){
    return Object.assign({}, z, {color: 'black'})
  }else{
    return Object.assign({}, z, {color: 'white'})
  }
})
