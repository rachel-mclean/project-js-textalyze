// This is the base code for v0.1 of our JavaScript text analyzer.
// Visit https://github.com/jfarmer/project-js-textalyze to see what to do.

// Send a message in Slack if you're stuck or unsure what to do.  These
// comments are here to help you, but please delete them as you go along.

// Open lib/itemCounts.js to get started on the first iteration.
let process = require('process');

// let itemCounts = require('./lib/itemCounts');
let toArray = require('./lib/toArray');
let sanitize = require('./lib/sanitize');
let readFileSync = require('./lib/readFileSync');
let itemFrequency = require('./lib/itemFrequency');

// let sampleInput = 'Happy birthday, Rachel!';

// let counts = itemCounts(toArray(sanitize(sampleInput)));

let file = process.argv[2];
let counts = itemFrequency(toArray(sanitize(readFileSync(file))));

// to run: node textalyze.js sample_data/great-gatsby.txt

// Object.keys returns an array of keys for the given object.
// See https://javascript.info/keys-values-entries
for (let item of Object.keys(counts).sort()) {
  let count = counts[item];
  let histogramElement = parseFloat(count) * 5;
  console.log(`${item}\t${count}` + ' ' + '='.repeat(histogramElement));
}
