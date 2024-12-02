const { keyboard, Key, sleep } = require("@nut-tree-fork/nut-js");

const Job = require('./Job')
const JobManager = require('./JobManager')

// Funções específicas de ação
async function pressSixAction() {
  console.log("Pressionando a tecla 6");
  await keyboard.pressKey(Key.Num6);
  await sleep(500); // Aguarda 500ms
  await keyboard.releaseKey(Key.Num6);
  console.log("Tecla 6 pressionada e liberada");
}

async function pressCtrlArrowAction() {
  console.log("Executando Ctrl + Right Arrow");
  await keyboard.pressKey(Key.LeftControl, Key.Right);
  await sleep(500);
  await keyboard.releaseKey(Key.LeftControl, Key.Right);

  console.log("Executando Ctrl + Left Arrow");
  await keyboard.pressKey(Key.LeftControl, Key.Left);
  await sleep(500);
  await keyboard.releaseKey(Key.LeftControl, Key.Left);

  console.log("Rotina Ctrl + Arrow finalizada");
}

// Configuração dos jobs
const pressSixJob = new Job("Soltar exori gran: Hotkey 6 (30s)", 30 * 1000, pressSixAction);
const pressCtrlArrowJob = new Job("Anti-idle Ctrl + Arrow (40s) ", 40 * 1000, pressCtrlArrowAction);

// Gerenciador de jobs
const jobManager = new JobManager();
jobManager.addJob(pressSixJob);
jobManager.addJob(pressCtrlArrowJob);

// Iniciar todos os jobs
jobManager.startAll();
