const tabela = 'usuario';

import Builder from "../utils/queryBuilder.js";

export default {
    async find(params) {
        const entity = await Builder(
            `SELECT * FROM ${tabela}`,
        )
        return entity;
    },

    async search(queryWhere) {
        let where = '';
        const whereKeys = Object.keys(queryWhere);
        for (let i = 0; i < whereKeys.length; i++) {
            if (i > 0) {
                where = where + ' and '
            }
            where = where + `${(Object.keys(queryWhere))[i]} = '${(Object.values(queryWhere))[i]}'`;
        }
        const query = `SELECT * FROM ${tabela} WHERE ${where}`     
        const entity = await Builder(
            query
        )
        return entity;
    },
    async create(body, hash) {
        const query = `INSERT INTO ${tabela} (usunome, usuemail, ususenha) VALUES ('${body.usunome}', ${body.usuemail},'${hash}')`;
        const entity = (await pool.query(query)).rows;
        return entity;
    },
    async alter(params) {
        const query = `UPDATE ${tabela} SET`;
        const entity = (await pool.query(query)).rows;
        return entity;
    },
    async del(params) {
        const query = `DELETE FROM ${tabela}`;
        const entity = (await pool.query(query)).rows;
        return entity;
    }
}


