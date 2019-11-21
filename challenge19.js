const pumpkinSpice = money => {
  const treats = {
    "pie": {
      "cost": 5,
      "spice": 30,
      "bought": 0
    },
    "latte": {
      "cost": 3,
      "spice": 15,
      "bought": 0
    },
    "macaron": {
      "cost": 1,
      "spice": 3,
      "bought": 0
    }
  };

  let totalSpice = 0

  for(let treat in treats){
    while(money >= treats[treat].cost){
      money = money - treats[treat].cost;
      totalSpice += treats[treat].spice;
      treats[treat].bought++;
    }
  }
  return [treats.pie.bought, treats.latte.bought, treats.macaron.bought, totalSpice];
}


const money = 9
