'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
}


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


function movePiece(startStack, endStack) {
  var x = stacks[startStack].pop();
  stacks[endStack].push(x);
}


function isLegal(startStack, endStack) {
  let end = stacks[endStack]
  let start = stacks[startStack]
  if (end[end.length - 1] <= start[start.length - 1]) {
    return false;
  } else if (startStack == 'a' && endStack == 'b' || endStack == 'c') {
    return true;
  } else if (startStack == 'b' && endStack == 'a' || endStack == 'c') {
    return true;
  } else if (startStack == 'c' && endStack == 'b' || endStack == 'a') {
    return true;
  } else {
    return false;
  }

}



function checkForWin() {
  if (endStack.length == 4) {
    console.log("you win");
  }

}


function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }

}


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });


  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}