const interviewAnswer = (topic) => {
  // Code here!
  if (topic == "arts funding") return "We'll have to get creative!";
  if (topic == "economy") return "Time is money.";
  if (topic == "transportation") return "It's going to be a long road, so we better get moving.";
  return "QUACK!";
  // Remember to return a value!
}

console.log(interviewAnswer("arts funding"));
console.log(interviewAnswer("economy"));
console.log(interviewAnswer("transportation"));
console.log(interviewAnswer("food waste"));