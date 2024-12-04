
const { Key } = require("@nut-tree-fork/nut-js");

function getRandomArrows() {
  const arrows = [Key.Up, Key.Down, Key.Left, Key.Right];
  const shuffled = arrows.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.max(2, Math.floor(Math.random() * arrows.length)));
  return selected;
}

module.exports = getRandomArrows