const { google } = require('googleapis');

const messageIds = [];

// get all the emails from the inbox
async function getEmails(queryString, auth, token = '') {
  const gmail = google.gmail({ version: 'v1', auth });
  const res = await gmail.users.messages.list({
    userId: 'me',
    q: queryString,
    pageToken: token,
  });
  const messages = res.data.messages;
  if (!messages || messages.length === 0) {
    console.log('No messages found.');
    return;
  }
  messages.forEach((message) => {
    messageIds.push(message.id);
  });

  if (res.data.nextPageToken) {
    await getEmails(queryString, auth, res.data.nextPageToken);
  }
  return messageIds;
}
exports.getEmails = getEmails;
