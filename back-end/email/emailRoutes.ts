import { Router, Response } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';
import ContractRepository from '../contracts/ContractRepository.js';
import { sendContractEmail } from './emailService.js';

const router = Router();
const contractRepository = new ContractRepository();

router.post(
  '/contracts/:id/send-email',
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    const { recipientEmail, subject } = req.body;

    if (!recipientEmail) {
      return res
        .status(400)
        .json({ error: 'E-mail do destinatário é obrigatório.' });
    }

    const contract = await contractRepository.findById((req.params.id as string));

    if (!contract) {
      return res.status(404).json({ error: 'Contrato não encontrado.' });
    }

    if (contract.user_id !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ error: 'Sem permissão.' });
    }

    try {
      const htmlContent = `
      <h2>Contrato: ${contract.title}</h2>
      <p>Você recebeu um contrato para revisão.</p>
      <p>Categoria: ${contract.category}</p>
      <p>Status: ${contract.status}</p>
      <hr />
      <p>Acesse a plataforma Retal para visualizar o documento completo.</p>
    `;

      await sendContractEmail(
        contract.id,
        recipientEmail,
        subject || `Contrato: ${contract.title}`,
        htmlContent,
      );

      return res.json({ message: 'E-mail enviado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao enviar e-mail.' });
    }
  },
);

export default router;
