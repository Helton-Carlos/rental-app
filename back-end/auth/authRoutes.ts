import { Router, Request, Response } from 'express';
import AuthService from './AuthService.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import UserRepository from './UserRepository.js';

const router = Router();
const authService = new AuthService();
const userRepository = new UserRepository();

router.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: 'A senha deve ter no mínimo 6 caracteres.' });
  }

  try {
    const { user, token } = await authService.register(email, password);

    return res.status(201).json({
      message: 'Conta criada com sucesso.',
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    const err = error as Error;

    if (err.message === 'E-mail já cadastrado.') {
      return res.status(409).json({ error: err.message });
    }

    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
  }

  try {
    const { user, token } = await authService.login(email, password);

    return res.status(200).json({
      message: 'Login realizado com sucesso.',
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    const err = error as Error;
    return res.status(401).json({ error: err.message });
  }
});

router.get('/me', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await userRepository.findById(req.userId!);

  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  return res.json({ user });
});

export default router;
