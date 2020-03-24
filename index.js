import write from './src/utils/console';
import server from './src/server';

require('dotenv').config();

class Environment {
  constructor() {
    this.url =
      process.env.SERVER_PORT === 80
        ? process.env.SERVER_ADDRESS
        : `${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}`;
    this.startServer();
  }

  startServer() {
    try {
      server.listen(process.env.SERVER_PORT, () => {
        write('success', `SERVER STARTED at: ${this.url}`);
      });
    } catch (error) {
      write('danger', `Error: ${error.message}`);
    }
  }
}

export default new Environment();
