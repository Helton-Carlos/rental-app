const app = require('./server');

const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen({ port: PORT });

    app.log.info(`server is running on: port: ${PORT}`);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

start();
