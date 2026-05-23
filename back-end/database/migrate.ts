import pool from './connection.js';

async function migrate(): Promise<void> {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('Migration executada com sucesso: tabela users criada.');
    process.exit(0);
  } catch (error) {
    const err = error as Error;
    console.error('Erro ao executar migration:', err.message);
    process.exit(1);
  }
}

migrate();
