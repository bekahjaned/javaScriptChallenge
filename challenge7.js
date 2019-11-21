const termTopics = (interviews) => {
  let count = [0, 0, 0];

  for(let i = 0; i < interviews.length; i++) {
      if(interviews[i] == "smart city") count[0] += 1;
      if(interviews[i] == "arts funding") count[1] += 1;
      if(interviews[i] == "transportation") count[2] += 1;
  }
  return count;
}


const interviews = [
  'smart city',
  'rebuild the lighthouse',
  'arts funding',
  'transportation',
  'arts funding',
  'rebuild the lighthouse',
  'sports funding',
  'tax cuts',
  'smart city',
  'arts funding',
  'smart city'
]
