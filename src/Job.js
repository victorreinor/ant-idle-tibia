class Job {
  constructor(name, interval, action) {
    this.name = name;
    this.interval = interval;
    this.action = action; // Função a ser executada
  }

  start() {
    console.log(`Iniciando o job: ${this.name}`);
    setInterval(async () => {
      try {
        await this.action();
      } catch (err) {
        console.error(`Erro no job ${this.name}:`, err);
      }
    }, this.interval);
  }
}

module.exports = Job