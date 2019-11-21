
const stations = [
      ['Big Bear Donair', 10, 'restaurant'],
      ['Bright Lights Elementary', 50, 'school'],
      ['Moose Mountain Community Centre', 45, 'community centre']
    ];

const chooseStations = (stations) => {
  let votingStations = [];
    for (let i = 0; i < stations.length; i++){
      let name = stations[i][0];
      let capacity = stations[i][1];
      let type = stations[i][2];
      if((capacity >= 20) && (type == "community centre" || type == "school")){
        votingStations.push(name);
      }
    }
    return votingStations;
}
