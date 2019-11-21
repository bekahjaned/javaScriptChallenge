const smartGarbage = (trash, bins) => {
  updatedBins = bins;

  if(trash == "waste") updatedBins.waste +=1;
  if(trash == "recycling") updatedBins.recycling +=1;
  if(trash == "compost") updatedBins.compost +=1;

  return updatedBins;
}


const bins = {
        waste: 4,
        recycling: 2,
        compost: 5
}

const trash = 'recycling'


// THIS is another way to do it!
// const smartGarbage = (trash, bins) => {
//   for(x in bins){
//     if(x == trash){
//       bins[x]+=1;
//     }
//   }
//   return bins;
// }

// And ANOTHER way to do it!
// const smartGarbage = (trash, bins) => {
//   if(bins.hasOwnProperty(trash)){
//     bins[trash]+=1;
//   }
//   return bins;
// }
