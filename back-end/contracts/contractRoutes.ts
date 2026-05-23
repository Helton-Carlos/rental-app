import { Router, Response } from 'express';
import {
  authMiddleware,
  premiumOnly,
  AuthRequest,
} from '../middleware/auth.js';
import ContractRepository from './ContractRepository.js';

const router = Router();
const contractRepository = new ContractRepository();

const BASIC_CATEGORIES = ['residential', 'commercial', 'party_space'];
const PREMIUM_CATEGORIES = [...BASIC_CATEGORIES, 'vehicle', 'product'];

router.get(
  '/contracts',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const contracts = await contractRepository.findByUserId(req.userId!);
    return res.json({ contracts });
  },
);

router.get(
  '/contracts/stats',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const stats = await contractRepository.countByUser(req.userId!);
    return res.json({ stats });
  },
);

router.get(
  '/contracts/:id',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const contract = await contractRepository.findById((req.params.id as string));

    if (!contract) {
      return res.status(404).json({ error: 'Contrato não encontrado.' });
    }

    if (contract.user_id !== req.userId && req.userRole !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Sem permissão para acessar este contrato.' });
    }

    return res.json({ contract });
  },
);

router.post(
  '/contracts',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const { title, category, data } = req.body;

    if (!title || !category) {
      return res
        .status(400)
        .json({ error: 'Título e categoria são obrigatórios.' });
    }

    const allowedCategories =
      req.userRole === 'premium' || req.userRole === 'admin'
        ? PREMIUM_CATEGORIES
        : BASIC_CATEGORIES;

    if (!allowedCategories.includes(category)) {
      return res.status(403).json({
        error:
          'Categoria não disponível no seu plano. Faça upgrade para premium.',
      });
    }

    const contract = await contractRepository.save({
      user_id: req.userId!,
      title,
      category,
      data: data || {},
    });

    return res.status(201).json({ contract });
  },
);

router.put(
  '/contracts/:id',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const contract = await contractRepository.findById((req.params.id as string));

    if (!contract) {
      return res.status(404).json({ error: 'Contrato não encontrado.' });
    }

    if (contract.user_id !== req.userId && req.userRole !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Sem permissão para editar este contrato.' });
    }

    const { title, status, data } = req.body;

    const updated = await contractRepository.update((req.params.id as string), {
      title,
      status,
      data,
    });

    return res.json({ contract: updated });
  },
);

router.delete(
  '/contracts/:id',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const contract = await contractRepository.findById((req.params.id as string));

    if (!contract) {
      return res.status(404).json({ error: 'Contrato não encontrado.' });
    }

    if (contract.user_id !== req.userId && req.userRole !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Sem permissão para excluir este contrato.' });
    }

    await contractRepository.delete((req.params.id as string));

    return res.json({ message: 'Contrato excluído.' });
  },
);

export default router;
