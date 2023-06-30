const { google } = require('googleapis');
const { atob } = require('../utils/atob.js');

async function getMessage(auth, messageIdArr) {
  const data = [];

  const gmail = google.gmail({ version: 'v1', auth });
  for (let i = 0; i < messageIdArr?.length; i++) {
    const res = await gmail.users.messages.get({
      userId: 'me',
      id: messageIdArr[i],
    });

    if (res?.data?.payload?.parts[0]?.body?.data) {
      const rawText = atob(res?.data?.payload?.parts[0]?.body?.data);

      const html = atob(res?.data?.payload?.parts[1]?.body?.data);

      // remove the last part of the rawText which is the boilerplate and promotional text
      const formatTxt = rawText.split(
        '--------------------------------------------------------------------------------'
      )[0];
      data.push({ html, txt: formatTxt });
    }
  }
  return data;
}
exports.getMessage = getMessage;
