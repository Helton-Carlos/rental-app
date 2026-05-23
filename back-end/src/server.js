const fastify = require('fastify');
const cors = require('@fastify/cors');
const authRoutes = require('../auth/authRoutes');

const app = fastify({ logger: true });

app.register(cors, {
  origin: true,
});

app.register(authRoutes);

module.exports = app;
