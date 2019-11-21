const PI = 3.14159;

const sphereVolume = function(radius){
  return (4/3) * PI * (radius * radius * radius);
}

const coneVolume = function(radius, height){
  return (1/3) * PI * (radius * radius) * (height);
}

const prismVolume = function(height, width, depth){
  return height *(width * depth);
}

const totalVolume = function(solids){
  let total = 0;
  for(let solid of solids){
    if(solid.type == "sphere") total += sphereVolume(solid.radius);
    if(solid.type == "cone") total += coneVolume(solid.radius, solid.height);
    if(solid.type == "prism") total += prismVolume(solid.height, solid.width, solid.depth);
  }
  return total;
}


const largeSphere = {
      type: 'sphere',
      radius: 40
}

const smallSphere = {
      type: 'sphere',
      radius: 10
}

const cone = {
      type: 'cone',
      radius: 3,
      height: 5
}

const duck = [
      largeSphere,
      smallSphere,
      cone
]
