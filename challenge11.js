const busTimes = buses => {
  for(let bus in buses){
    busArrival = buses[bus].distance / buses[bus].speed;
    buses[bus] = busArrival
  }
  return buses;
}

const buses = {
  pickadilly: {
    distance: 10,
    speed: 5
  },
  uptown: {
    distance: 13,
    speed: 10
  }
}


// distance divided by speed equals the arrival time
