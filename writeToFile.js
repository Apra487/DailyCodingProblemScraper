const fs = require("fs");
const { gitCommit } = require("./utils/git.js");

async function writeToFile(rawTextArr) {
  // ! need to refactor this ! this is hacky solution ! Need to find a way to create the directory here
  // Create a new directory named 'DailyCodingProblem'
  // fs.mkdirSync('DailyCodingProblem');

  // Initialize git
  // const git = await gitInit();
  // console.log({git});

  for (const i in rawTextArr) {
    // Create a new directory for each day
    fs.mkdirSync(`DailyCodingProblem/Day${i}`);

    // Write the raw text to a md file
    fs.writeFile(
      `DailyCodingProblem/Day${i}/Day${i}Problem.md`,
      rawTextArr[i],
      { encoding: "utf8" },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

    // Construct commit msg and commit the changes to git
    await constructCommit(rawTextArr[i], i);
  }
}

async function constructCommit(rawText, i) {
  // regex to retrive 'This problem was asked by ...'
  const regex = /^This problem was[^.]*\./m;
  const match = rawText.match(regex);

  if (match) {
    const line = match[0];
    await gitCommit(`Day ${i} Problem: ${line}`);
    console.log(line);
  } else {
    console.log("No matching line found.");
    // Commit with generic message to git
    await gitCommit(`Day${i} Problem`);
  }
}

exports.writeToFile = writeToFile;
