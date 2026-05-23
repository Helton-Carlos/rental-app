import { Router, Response } from 'express';
import { authMiddleware, adminOnly, AuthRequest } from '../middleware/auth.js';
import UserRepository from '../auth/UserRepository.js';
import pool from '../database/connection.js';

const router = Router();
const userRepository = new UserRepository();

router.get(
  '/admin/users',
  authMiddleware,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    const users = await userRepository.findAll();
    return res.json({ users });
  },
);

router.patch(
  '/admin/users/:id/role',
  authMiddleware,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    const { role } = req.body;

    if (!['basic', 'premium', 'admin'].includes(role)) {
      return res.status(400).json({ error: 'Role inválida.' });
    }

    const user = await userRepository.updateRole(req.params.id as string, role);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json({ user });
  },
);

router.get(
  '/admin/stats',
  authMiddleware,
  adminOnly,
  async (req: AuthRequest, res: Response) => {
    const usersResult = await pool.query(`
    SELECT 
      COUNT(*) as total_users,
      COUNT(*) FILTER (WHERE role = 'basic') as basic_users,
      COUNT(*) FILTER (WHERE role = 'premium') as premium_users
    FROM users
  `);

    const contractsResult = await pool.query(`
    SELECT 
      COUNT(*) as total_contracts,
      COUNT(*) FILTER (WHERE status = 'active') as active_contracts,
      COUNT(*) FILTER (WHERE status = 'pending') as pending_contracts
    FROM contracts
  `);

    return res.json({
      users: usersResult.rows[0],
      contracts: contractsResult.rows[0],
    });
  },
);

export default router;
