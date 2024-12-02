// Classe para gerenciar e iniciar múltiplos jobs
class JobManager {
  constructor() {
    this.jobs = [];
  }

  addJob(job) {
    this.jobs.push(job);
  }

  startAll() {
    console.log("Iniciando todos os jobs...");
    this.jobs.forEach((job) => job.start());
    console.log("Todos os jobs foram iniciados.");
  }
}
module.exports = JobManager