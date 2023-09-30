import pool from '../../connection.js';

export default async function(query) {
    try {
        const data = (await pool.query(query)).rows;
        return data;
    } catch(e) {
        return e
    }
}
