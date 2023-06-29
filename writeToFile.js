const fs = require('fs');

async function writeToFile(rawTextArr) {

  // Creae a new directory named 'DailyCodingProblem'
  fs.mkdirSync('DailyCodingProblem');

  for (const i in rawTextArr) {
    // Create a new directory for each day
    fs.mkdirSync(`DailyCodingProblem/Day${i}`);

    // Write the raw text to a md file
    fs.writeFile(`DailyCodingProblem/Day${i}/Day${i}Problem.md`, rawTextArr[i], { encoding: 'utf8' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

  }
}
exports.writeToFile = writeToFile;
