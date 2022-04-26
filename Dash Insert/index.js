function DashInsertII(num) { 
	const resString = num.toString(10);
	return resString
		.replace(/([2468])(?=[2468])/g, '$1*')
		.replace(/([13579])(?=[13579])/g, '$1-');
}
   
// keep this function call here 
DashInsertII(readline());
