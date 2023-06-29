const fs = require("fs");
const simpleGit = require("simple-git");

// ! need to refactor this ! this is a hacky solution ! To create a new directory named 'DailyCodingProblem' here
// Check if the directory already exists
const directoryName = "DailyCodingProblem";
if (!fs.existsSync(directoryName)) {
  // Create the directory
  fs.mkdirSync(directoryName);
  console.log(`Directory '${directoryName}' created successfully.`);
}

const git = simpleGit("./DailyCodingProblem/", { binary: "git" }).clean(
  simpleGit.CleanOptions.FORCE
);

git.init();

async function gitCommit(commitMsg) {
  try {
    await git.add("./*");
    await git.commit(commitMsg);
  } catch (e) {
    console.error(e);
  }
}

exports.gitCommit = gitCommit;
