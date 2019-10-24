'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let passedNodes = [];
  let currentNode = linkedlist.head.next

  if (currentNode.value === null) {
    return false;
  }
  passedNodes.push(currentNode.value)
  currentNode = currentNode.next

  while (currentNode.next.value !== null) {
    if (passedNodes.includes(currentNode.value)) {
      console.log('currentNode...', currentNode)
      console.log('currentNodenext...', currentNode.next)
      console.log('passed...', passedNodes)
      return true;
    }
    else {
      passedNodes.push(currentNode.value);
    }
  }
  return false
}

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop


