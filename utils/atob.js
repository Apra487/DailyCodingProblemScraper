const atob = (base64) => {
  const buffer = Buffer.from(base64, 'base64');
  return buffer.toString('binary');
};

module.exports = { atob };
