module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (!item.enhancement && item.enhancement !== 0)
    throw new Error('Invalid item: no enhancement detected');
  else if (item.enhancement === 20) return { ...item };
  else if (typeof item.enhancement !== 'number')
    throw new Error('Invalid item: enhancement must be a number');
  else if (item.enhancement > 20 || item.enhancement < 0)
    throw new Error('Invalid item: enhancement must be bound in range 0 to 20');
  else return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if (
    (!item.durability && item.durability !== 0) ||
    (!item.enhancement && item.enhancement !== 0)
  )
    throw new Error('Invalid item: must have durability and enhancement');
  if (
    typeof item.durability !== 'number' ||
    typeof item.enhancement !== 'number'
  )
    throw new Error('Invalid item: durability and enhancement must be numbers');
  if (item.durability > 100 || item.durability < 0)
    throw new Error('Invalid item: durability must be bound in range 0 to 100');
  if (item.enhancement > 20 || item.enhancement < 0)
    throw new Error('Invalid item: enhancement must be bound in range 0 to 20');

  let updated = { ...item };
  if (updated.enhancement < 15)
    updated.durability < 5
      ? (updated = { ...updated, durability: 0 })
      : (updated = { ...updated, durability: updated.durability - 5 });
  else
    updated.durability < 10
      ? (updated = { ...updated, durability: 0 })
      : (updated = { ...updated, durability: updated.durability - 10 });

  updated.enhancement > 16
    ? (updated = { ...updated, enhancement: updated.enhancement - 1 })
    : null;
  return updated;
}

function repair(item) {
  if (!item.durability && item.durability !== 0)
    throw new Error('Invalid item: no durability detected');
  else if (typeof item.durability !== 'number')
    throw new Error('Invalid item: durability must be a number');
  else if (item.durability > 100 || item.durability < 0)
    throw new Error('Invalid item: durability must be bound in range 0 to 100');
  else return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
