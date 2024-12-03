const { logWithTimestamp } = require('./../utils');

class JobManager {
  constructor() {
    this.jobs = [];
  }

  addJob(job) {
    this.jobs.push(job);
  }

  startAll() {
    logWithTimestamp("Iniciando todos os jobs...")
    this.jobs.forEach((job) => job.start());
    logWithTimestamp("Todos os jobs foram iniciados.");
  }
}
module.exports = JobManager