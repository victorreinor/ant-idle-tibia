function logWithTimestamp(message) {
  if (!process.env.ENABLE_LOGS ) return
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

module.exports = logWithTimestamp