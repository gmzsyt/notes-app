import { PG_CONNECTION } from '../constants';
import { Pool } from 'pg';
import { DATABASE_CONFIG } from '../config/config';

export const dbProvider = {
  provide: PG_CONNECTION,
  useFactory: async () => {
    const pool = new Pool(DATABASE_CONFIG);
    const client = await pool.connect();

    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
        );
      `);

      await client.query(`
        CREATE TABLE IF NOT EXISTS notes (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL
        );
      `);

      return client;
    } catch (error) {
      throw error;
    }
  },
};
