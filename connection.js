import commonpg from 'pg';
const { Pool } = commonpg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tcc',
  password: '123456',
  port: 5432,
});

export default pool;