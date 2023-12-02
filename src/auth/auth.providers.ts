import { PG_CONNECTION } from '../constants';
import { Pool } from 'pg';
import { DATABASE_CONFIG } from '../config/config';

export const authDbProvider = {
  provide: PG_CONNECTION,
  useFactory: () => new Pool(DATABASE_CONFIG), 
};