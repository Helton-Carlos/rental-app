import nodemailer from 'nodemailer';
import pool from '../database/connection.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

export async function sendContractEmail(
  contractId: string,
  recipientEmail: string,
  subject: string,
  htmlContent: string,
): Promise<void> {
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@retal.app',
    to: recipientEmail,
    subject,
    html: htmlContent,
  });

  await pool.query(
    'INSERT INTO contract_emails (contract_id, recipient_email) VALUES ($1, $2)',
    [contractId, recipientEmail],
  );
}
