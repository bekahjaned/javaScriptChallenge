const registerToVote = (name, unregisteredVoters) => {
  // Code here!
    let mailingList = [];
    for(let i = 0; i < unregisteredVoters.length; i++){
      if(name !== unregisteredVoters[i]){
        mailingList.push(unregisteredVoters[i])
      }
    }
    return mailingList;
}


const name = 'Bradley';
const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];