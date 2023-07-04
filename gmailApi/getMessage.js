const { google } = require('googleapis');
const { atob } = require('../utils/atob.js');

async function getMessage(auth, messageIdArr) {
  const data = [];

  const gmail = google.gmail({ version: 'v1', auth });
  for (let i = 0; i < messageIdArr?.length; i++) {
    const res = await gmail.users.messages.get({
      userId: 'me',
      id: messageIdArr[i],
      metadataHeaders: ['Subject'],
    });

    const subject = res.data.payload.headers.find(
      (header) => header.name === 'Subject'
    ).value;

    if (res?.data?.payload?.parts) {
      console.log(res.data.payload?.parts);
      const rawText = atob(
        res.data.payload?.parts?.find((part) => part.mimeType === 'text/plain')
          .body.data
      );
      const html = atob(
        res.data.payload?.parts?.find((part) => part.mimeType === 'text/html')
          .body.data
      );
      console.log({ html });

      const formatTxt = rawText.split(
        '--------------------------------------------------------------------------------'
      )[0];
      data.push({ html, txt: formatTxt, subject });
    }
  }
  return data;
}
exports.getMessage = getMessage;
