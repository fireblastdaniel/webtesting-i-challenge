module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (!item.durability && item.durability !== 0)
    throw new Error('Invalid item: no durability detected');
  else if (typeof item.durability !== 'number')
    throw new Error('Invalid item: durability must be a number');
  else if (item.durability > 100 || item.durability < 0)
    throw new Error('Invalid item: durability must be between 0 and 100');
  else return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
