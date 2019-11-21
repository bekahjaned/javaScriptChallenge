const finalPosition = (moves) => {
  let position = [0, 0];
  // [X, Y]
  for(let i = 0; i < moves.length; i++){
    if(moves[i] == "north") position[1]++;
    if(moves[i] == "east") position[0]++;
    if(moves[i] == "south") position[1]--;
    if(moves[i] == "west") position[0]--;
  }
  return position;
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
// north is Y++
// east is X++
// south is Y--
// west is X--

// ['south', 'north', 'east', 'west', 'south', 'west','north']
// [-1, 0]
