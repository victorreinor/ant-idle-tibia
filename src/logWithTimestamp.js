// Função para log com timestamp
function logWithTimestamp(message) {
  const timestamp = new Date().toISOString(); // Formato ISO para data e hora
  console.log(`[${timestamp}] ${message}`);
}

module.exports = logWithTimestamp