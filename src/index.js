require('dotenv').config();

const { keyboard, Key, sleep } = require("@nut-tree-fork/nut-js");
const { Job, JobManager, DynamicIntervalJob } = require('./core');
const { logWithTimestamp, generateRandomInterval } = require('./utils')

async function pressSixAction() {
  logWithTimestamp("Pressionando a tecla 6");
  await keyboard.pressKey(Key.Num6);
  await sleep(process.env.KEY_PRESS_DELAY);
  await keyboard.releaseKey(Key.Num6);
  logWithTimestamp("Tecla 6 pressionada e liberada");
}

async function pressCtrlArrowAction() {
  logWithTimestamp("Executando Ctrl + Right Arrow");

  await keyboard.pressKey(Key.LeftControl, Key.Right);
  await sleep(process.env.KEY_PRESS_DELAY);
  await keyboard.releaseKey(Key.LeftControl, Key.Right);

  logWithTimestamp("Executando Ctrl + Left Arrow");

  await keyboard.pressKey(Key.LeftControl, Key.Left);
  await sleep(process.env.KEY_PRESS_DELAY);
  await keyboard.releaseKey(Key.LeftControl, Key.Left);

  logWithTimestamp("Rotina Ctrl + Arrow finalizada");
}

const pressSixJob = new Job("Soltar exori gran: Hotkey 6 (30s)", process.env.PRESS_SIX_INTERVAL, pressSixAction);

const pressCtrlArrowJob = new DynamicIntervalJob(
  "Anti-idle Ctrl + Arrow",
  pressCtrlArrowAction,
  generateRandomInterval(null), // Generate the first random interval
  generateRandomInterval // Function to generate next intervals
);

const jobManager = new JobManager();
jobManager.addJob(pressSixJob);
jobManager.addJob(pressCtrlArrowJob);

jobManager.startAll();
