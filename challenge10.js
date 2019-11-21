const whereCanIPark = (spots, vehicle) => {
	let rightSpot = [];
	for(let i = 0; i < spots.length; i++){
		let row = spots[i];
		// console.log(row);
		for(let j = 0; j < row.length; j++){
			let column = row[j];
			// console.log(column);
			if(vehicle == "regular")
				if(column === "R") return column;
			if(vehicle == "small")
				if(column === "S") return column;
			if(vehicle == "motorcycle")
				if(column === "M") return column;
			
			
		}
	} 
}


const spots = [
	//COLUMNS ARE X
	//0    1    2    3    4    5
	['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
	['s', 'M', 's', 'S', 'R', 'M'], // 1
	['s', 'M', 's', 'S', 'R', 'm'], // 2
	['S', 'r', 's', 'm', 'R', 'M'], // 3
	['S', 'r', 's', 'm', 'R', 'M'], // 4
	['S', 'r', 'S', 'M', 'M', 'S'], // 5
]

const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'