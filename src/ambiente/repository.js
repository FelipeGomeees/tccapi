const tabela = 'ambiente';

import Builder from "../utils/queryBuilder.js";

// Repository: Ações relacionadas a SQL
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
    async create(body) {
        const query = `INSERT INTO ${tabela} (ambnome, ambdescricao, ambicone, ambdatacriacao)
         VALUES ('${body.ambnome}', '${body.ambdescricao}', '${body.ambicone}', '${body.now}') RETURNING id`;
        const entity = await Builder(query);
        return entity;
    },

    // CREATE TABLE ambiente (
    //     id SERIAL PRIMARY KEY,
    //     ambnome VARCHAR(30) NOT NULL,
    //     amdescricao VARCHAR(255),
    //     ambicone VARCHAR(255),
    //     ambdatacriacao TIMESTAMP
    // );

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


