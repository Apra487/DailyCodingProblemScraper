const { getMessage } = require('./gmailApi/getMessage.js');
const { authorize } = require('./authorize.js');
const { writeToFile } = require('./utils/writeToFile.js');
const { getEmails } = require('./gmailApi/getEmails.js');
require('dotenv').config();

(async () => {
  try {
    const auth = await authorize();
    console.log(`Authorization ✅`);

    console.log(`Retreiving the IDs...`);
    const messageIdArr = await getEmails(
      `from:${process.env.FROM_EMAIL}`,
      auth
    );
    console.log(
      `Retreiving IDs ✅. Total no of emails ---> ${messageIdArr.length}`
    );

    // get the raw text of each email in an array and reverse it since the latest email should at the end
    console.log(`Retreiving Body...`);
    const bodyArr = (await getMessage(auth, messageIdArr)).reverse();

    console.log(
      `Retreived Body ✅. Total no of rawTextBody ---> ${bodyArr.length}`
    );

    // write the raw text to file
    console.log(`Writing to file...`);
    await writeToFile(bodyArr);
    console.log(`Written to file ✅`);
  } catch (error) {
    console.error(error);
  }
})();
