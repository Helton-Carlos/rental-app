const AuthService = require('./AuthService');

async function authRoutes(app) {
  const authService = new AuthService();

  app.post('/api/register', async (request, reply) => {
    const { email, password } = request.body;

    if (!email || !password) {
      return reply.status(400).send({
        error: 'E-mail e senha são obrigatórios.',
      });
    }

    if (password.length < 6) {
      return reply.status(400).send({
        error: 'A senha deve ter no mínimo 6 caracteres.',
      });
    }

    try {
      const user = await authService.register(email, password);

      return reply.status(201).send({
        message: 'Conta criada com sucesso.',
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (error) {
      if (error.message === 'E-mail já cadastrado.') {
        return reply.status(409).send({ error: error.message });
      }

      return reply.status(500).send({ error: 'Erro interno do servidor.' });
    }
  });
}

module.exports = authRoutes;
