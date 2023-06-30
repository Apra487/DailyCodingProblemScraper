const { getMessage } = require('./gmailApi/getMessage.js');
const { authorize } = require('./authorize.js');
const { writeToFile } = require('./utils/writeToFile.js');
const { getEmails } = require('./gmailApi/getEmails.js');

(async () => {
  try {
    const auth = await authorize();
    console.log(`Authorization ✅`);

    console.log(`Retreiving the IDs...`);
    const messageIdArr = await getEmails(
      'from:founders@dailycodingproblem.com',
      auth
    );
    console.log(
      `Retreiving IDs ✅. Total no of emails ---> ${messageIdArr.length}`
    );

    // get the raw text of each email in an array and reverse it since the latest email should at the end
    console.log(`Retreiving rawText...`);
    const rawTextArr = (await getMessage(auth, messageIdArr)).reverse();

    console.log(
      `Retreiving rawText ✅. Total no of rawTextBody ---> ${rawTextArr.length}`
    );

    // write the raw text to file
    console.log(`Writing to file...`);
    await writeToFile(rawTextArr);
    console.log(`Writing to file ✅`);
  } catch (error) {
    console.error(error);
  }
})();
