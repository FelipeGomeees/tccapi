const tabela = 'tagpadrao';

import Builder from "../utils/queryBuilder.js";

export default {
    async find(params) {
        const entity = await Builder(
            `SELECT * FROM ${tabela} LEFT JOIN `,
        )
        return entity;
    },

    async all(id) {
        const entity = await Builder(
            `SELECT id, tapnome, tapdescricao, tapcor, tapurlsobre, tapdark
            FROM ${tabela} WHERE tapidtagpadraocategoria = ${id} ORDER BY tapnome`,
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
        console.log(body);
        const query = `INSERT INTO tagpadrao (tapnome, tapdescricao, tapprioridade, tapidtagtipo, tapcor, tapurlsobre, tapidtagpadraocategoria, tapdark)
         VALUES ('${body.tapnome}','${body.tapdescricao}', ${body.tapprioridade},${body.tapidtagtipo},'${body.tapcor}','${body.tapurlsobre}',${body.tapidtagpadraocategoria}, '${body.tapdark}')`;
        const entity = await Builder(query);
        return entity;
    },

    // id SERIAL PRIMARY KEY,
    // tapnome VARCHAR(30),
    // tapdescricao VARCHAR(255),
    // tapprioridade INT,
    // tapidtagtipo INT REFERENCES tagtipo(id),
    // tapcor VARCHAR(7),
    // tapurlsobre VARCHAR(255),
    // tapidtagpadraocategoria INT REFERENCES tagpadraocategoria(id)

    async alter(params) {
        const query = 'UPDATE Usuario SET';
        const entity = (await pool.query(query)).rows;
        return entity;
    },
    async del(params) {
        const query = 'DELETE FROM Usuario';
        const entity = (await pool.query(query)).rows;
        return entity;
    }
}


