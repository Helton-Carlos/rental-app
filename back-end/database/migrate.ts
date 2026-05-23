import pool from './connection.js';

async function migrate(): Promise<void> {
  try {
    await pool
      .query(
        `
      CREATE TYPE user_role AS ENUM ('admin', 'basic', 'premium');
      CREATE TYPE contract_status AS ENUM ('active', 'pending', 'expired', 'cancelled');
      CREATE TYPE contract_category AS ENUM ('residential', 'commercial', 'party_space', 'vehicle', 'product');
    `,
      )
      .catch(() => {});

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role user_role DEFAULT 'basic',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS contracts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        category contract_category NOT NULL,
        status contract_status DEFAULT 'pending',
        data JSONB DEFAULT '{}',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS contract_emails (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        contract_id UUID NOT NULL REFERENCES contracts(id) ON DELETE CASCADE,
        recipient_email VARCHAR(255) NOT NULL,
        sent_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('Migrations executadas com sucesso.');
    process.exit(0);
  } catch (error) {
    const err = error as Error;
    console.error('Erro ao executar migrations:', err.message);
    process.exit(1);
  }
}

migrate();
