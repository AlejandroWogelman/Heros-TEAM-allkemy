export const statsTeam = (array) => {
  const speed = array.reduce((prev, el) => {
    if (el.powerstats.speed > 1) {
      return parseInt(el.powerstats.speed) + prev;
    } else {
      return prev + 0;
    }
  }, 0);

  const power = array.reduce((prev, el) => {
    if (el.powerstats.power > 1) {
      return parseInt(el.powerstats.power) + prev;
    } else {
      return prev;
    }
  }, 0);

  const combat = array.reduce((prev, el) => {
    if (el.powerstats.combat > 1) {
      return parseInt(el.powerstats.combat) + prev;
    } else {
      return prev;
    }
  }, 0);

  const strength = array.reduce((prev, el) => {
    if (el.powerstats.strength > 1) {
      return parseInt(el.powerstats.strength) + prev;
    } else {
      return prev;
    }
  }, 0);
  const intelligence = array.reduce((prev, el) => {
    if (el.powerstats.intelligence > 1) {
      return parseInt(el.powerstats.intelligence) + prev;
    } else {
      return prev;
    }
  }, 0);
  const durability = array.reduce((prev, el) => {
    if (el.powerstats.durability > 1) {
      return parseInt(el.powerstats.durability) + prev;
    } else {
      return prev;
    }
  }, 0);

  const height = array.reduce(
    (acc, el) => acc + parseInt(el.appearance.height[1]),
    0
  );

  const weight = array.reduce(
    (acc, el) => acc + parseInt(el.appearance.weight[1]),
    0
  );

  const total = [speed + power + combat + strength + intelligence + durability];

  let MaxStats = { initialValue: 0 };

  const max = [
    { speed },
    { power },
    { combat },
    { strength },
    { intelligence },
    { durability },
  ].forEach((max) =>
    Object.values(max) > Object.values(MaxStats) ? (MaxStats = max) : null
  );

  return {
    speed,
    power,
    combat,
    strength,
    intelligence,
    durability,
    MaxStats,
    height,
    weight,
    total,
  };
};
