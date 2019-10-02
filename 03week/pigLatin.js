'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


console.log("i am here");


  function pigLatin(word) {
    let newWord = word.trim().toLowerCase();
  
    let vowels = "aeiou";
  
    function vowelsDetected(newWord) {
      for (let i = 0; i < newWord.length; i++) {
        if (vowels.indexOf(newWord[i]) !== -1) {
          return i;
        }
      }
    }

    let firstVowel = vowelsDetected(newWord);
    if (firstVowel > 0) {
      return newWord.slice(firstVowel) + newWord.slice(0, firstVowel) + "ay";
    } else {
      return newWord + "yay";
    }
  }


  function handleTranslate(){
      

      //1. get the input value from the input box
      var inputBox = document.getElementById("plainText");
      
      var englishWord = inputBox.value;
      
      //2. call the piglatin function with this value

      var pigLatinWord = pigLatin(englishWord);
      console.log("pig latin word", pigLatinWord);

      //3. write the result that the pig latin function returns to the screen

      var spanElement = document.getElementById("pigLatinText");
      console.log("span element", spanElement);

      spanElement.innerText = pigLatinWord;
  }




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  //getPrompt();

}
