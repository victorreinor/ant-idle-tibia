const Job = require('./Job')
const { logWithTimestamp } = require('./../utils')

class DynamicIntervalJob extends Job {
  constructor(name, action, initialInterval, intervalGenerator) {
    super(name, initialInterval, action);
    this.previousInterval = initialInterval;
    this.intervalGenerator = intervalGenerator;
  }

  // Overriding the `start` method to handle dynamic ranges
  async start() {
    const executeAction = async () => {
      await this.action();

      // Generate next dynamic range
      const nextInterval = this.intervalGenerator(this.previousInterval);
      logWithTimestamp(`${this.name} será executado novamente em ${Math.round(nextInterval / 1000 / 60)} minutos.`);
      this.previousInterval = nextInterval;
      
      // Schedule next run
      this.timer = setTimeout(executeAction, nextInterval);
    };
    
    // Schedule first run
    this.timer = setTimeout(executeAction, this.interval);
  }
}
module.exports = DynamicIntervalJob