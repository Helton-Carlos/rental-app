const { Router } = require('express');
const AuthService = require('./AuthService');

const router = Router();
const authService = new AuthService();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: 'E-mail e senha são obrigatórios.',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: 'A senha deve ter no mínimo 6 caracteres.',
    });
  }

  try {
    const user = await authService.register(email, password);

    return res.status(201).json({
      message: 'Conta criada com sucesso.',
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.message === 'E-mail já cadastrado.') {
      return res.status(409).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
