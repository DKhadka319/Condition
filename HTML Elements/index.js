function HTMLElements(str) { 
	const inputArray = str.match(/(<\/?\w+>)/g);
	const len = inputArray.length;
	const HTMLStack = [];
	// go through the list of elements and push them onto the stack, or pull off
	// if closing tags.
	for (let i = 0; i < len; i++) {
		const isOpenTag = !(/\//.test(inputArray[i]));
		const tag = inputArray[i].replace(/[<>/]/g, '');
		if (isOpenTag) {
			HTMLStack.push(tag);
		} else {
			const popped = HTMLStack.pop();
			if (tag !== popped) {
				return popped;
			}
		}
	}
	return HTMLStack.length ? HTMLStack.pop() : true;
}
   
// keep this function call here 
HTMLElements(readline());
