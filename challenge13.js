const lightsOn = function(lights){
  for(let i = 0; i < lights.length; i++){
    lights[i].on = true;
  }
  return lights;
}

const lightsOff = function(lights){
  for(let i = 0; i < lights.length; i++){
    lights[i].on = false;
  }
  return lights;
}

const toggleLights = function(lights, lightsAreOn){
  for(let i = 0; i < lights.length; i++){
    if(lightsAreOn === true){
      lights[i].on = false;
    } else {
      lights[i].on = true;
    }
  }
  return lights;
}




const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
]

const lightsAreOn = true
