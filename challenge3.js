const castVote = (name, votes) => {
	let updatedVotes = votes;
	if(name == "Tim") updatedVotes[0] +=1;
	if(name == "Sally") updatedVotes[1] +=1;
	if(name == "Beth") updatedVotes[0] +=1;

	return updatedVotes;
}

// const name = 'Sally';
// const votes = [
//  0, // Tim
//  2, // Sally
//  1 // Beth
// ]