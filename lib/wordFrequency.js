// assuming input is array of words obtained using string.split(" ")
// let readFileSync = require('./readFileSync');
// let toWordArray = require('./toWordArray');

function wordFrequency(array) {
  let counts = {};
  let numWords = array.length;
  for (let i = 0; i < numWords; i++) {
    if (counts[array[i]] === undefined) {
      counts[array[i]] = 1;
    } else {
      counts[array[i]] = counts[array[i]] + 1;
    }
  }

  let max = counts[array[0]];
  let word = array[0];
  let num = 0;
  let arrayOfMaxes = [];

  while (num < 5) {
    for (let j = 0; j < array.length; j++) {
      if (counts[array[j]] > max) {
        console.log(max);
        max = counts[array[j]];
      }
    }

    arrayOfMaxes.push(word + ': ' + max);
    console.log(counts);
    delete counts[word];
    console.log(counts);
    num++;
  }

  // console.log(word + ': ' + max);

  // for (let i = 0; i < array.length; i++) {
  //   if (counts[array[i]].toString().indexOf('%') === -1) {
  //     // let temp = counts[array[i]].toFixed(2);
  //     counts[array[i]] =
  //   }
  // }

  return arrayOfMaxes;
}

module.exports = wordFrequency;

console.log(wordFrequency(['banana', 'pear', 'pear', 'grapes', 'grapes', 'grapes', 'grapes']));
// console.log(wordFrequency(toWordArray((readFileSync('../sample_data/great-gatsby.txt')))));
