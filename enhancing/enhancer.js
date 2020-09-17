module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item, enhancement: item.enhancement < 20? ++item.enhancement : item.enhancement };
}

function fail(item) {
  if ( item.enhancement < 15) {
    return { ...item, durability: item.durability -5   }
  } else if (item.enhancement >= 15 && item.enhancement <= 16) {
    return { ...item, durability: item.durability -10   }
  } else { return { ...item, enhancement: --item.enhancement  }}
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}


