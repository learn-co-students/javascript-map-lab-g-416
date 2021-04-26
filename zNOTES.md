




const transformedAutobotsWithMap = autobots.map(function (autobot,i,autobots) {
const transformedAutobotsWithMap = autobots.map(function (autobot) {
    return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

for (let i = 0; i < collection.length; i++) {
  const element = collection[i];
  result.push(callback(element, i, collection));
}




const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});
