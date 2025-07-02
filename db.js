import pg from "pg";
const { Pool } = pg;
import 'dotenv/config';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default {
  query: (text, params) => pool.query(text, params),
};
