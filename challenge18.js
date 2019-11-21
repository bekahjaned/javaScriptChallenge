const countTickets = (tickets) => {
  let count = {red: 0, green: 0, blue: 0};
  for(let i = 0; i < tickets.length; i++){
    if(tickets[i] == "red") count.red++;
    if(tickets[i] == "green") count.green++;
    if(tickets[i] == "blue") count.blue++;
  }
  return count;
}

const bestOdds = (tickets, raffleEntries) => {
  finalCount = countTickets(tickets);
  redCount = finalCount.red / raffleEntries.red;
  greenCount = finalCount.green / raffleEntries.green;
  blueCount = finalCount.blue / raffleEntries.blue;
  if(redCount > greenCount && redCount > blueCount){
    message = "You have the best odds of winning the red raffle."
  } else if(greenCount > redCount && greenCount > blueCount){
    message = "You have the best odds of winning the green raffle."
  } else if(blueCount > redCount && blueCount > greenCount){
    message = "You have the best odds of winning the blue raffle."
  }
  return message;
}






const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}
