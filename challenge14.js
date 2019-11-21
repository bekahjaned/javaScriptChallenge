const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let distanceFee = distanceTraveled * 0.25;
  let rushHourFee = 0;

  if(numberOfPeople >= 30) rushHourFee = 0.25;

  let amount = 1 + distanceFee + rushHourFee;
  let ticketPrice = amount.toFixed(2);

  return "$" + ticketPrice;
}

const numberOfPeople = 15
const distanceTraveled = 10
