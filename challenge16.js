const festivalColours = color1 => {
	let values = [0, 0];
	values[0] = color1 + 150;
	values[1] = color1 + 210;
	return values;
}

 const color1 = 100
// expected output is [250, 310]


// Another way of doing it
// const festivalColours = color1 => {
//   var x = (color1 + 150)-360; //split 1
//   var y = (color1 + 210)-360; //split 2
//   if (x<0){ x = x + 360}  // absolute in degrees
//   if (y<0){ y = y + 360}  // absolute in degrees
//   if (x>y){ x,y=y,x}  // minimum first
//   return [x,y];
// }