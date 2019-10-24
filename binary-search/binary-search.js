'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	if (array[0] > array[array.length - 1]) {
		array.sort();
	}
	const midIndex = Math.floor(array.length / 2)
	const left = array.slice(0, midIndex)
	const right = array.slice(midIndex)

	console.log("sorted...", array)
	console.log(array[midIndex])

	if (target < array[midIndex] && midIndex != 0) {
		return binarySearch(left, target)
	}
	if (target > array[midIndex] && midIndex != (array.length - 1)) {
		return binarySearch(right, target)
	}
	if (target === array[midIndex]) {
		return true;
	}
	else {
		return false
	}

	// return array.includes(target) //

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

// const binarySearch = (array, target) => {
// 	const pointerIndex = Math.floor(array.length / 2)

// 	while (pointerIndex !== 0 || pointerIndex !== (array.length - 1)) {
// 		if (target > array[pointerIndex]) {
// 			pointerIndex = (pointerIndex + array.length - 1) / 2
// 		}
// 		if (target < array[pointerIndex]) {
// 			pointerIndex = pointerIndex / 2
// 		}
// 		else {
// 			return true
// 		}
// 	}
// 	return false
// };
