function generateRandomInterval(previousInterval) {
  const min = parseInt(process.env.ANTI_IDLE_MIN_INTERVAL, 10)
  const max = parseInt(process.env.ANTI_IDLE_MAX_INTERVAL, 10)

  if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
    throw new Error("The ANTI_IDLE_MIN_INTERVAL and ANTI_IDLE_MAX_INTERVAL values in .env are invalid.");
  }

  let randomInterval;

  do {
    randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomInterval === previousInterval);

  if (randomInterval > 2147483647) randomInterval = 2147483647;

  return randomInterval;
}


module.exports = generateRandomInterval