const tabela = 'tag';

import Builder from "../utils/queryBuilder.js";

export default {
    async find(params) {
        const entity = await Builder(
            `SELECT * FROM ${tabela} LEFT JOIN `,
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
        const query = `INSERT INTO tag (tagidambiente, tagnome, tagdescricao, tagprioridade, tagidtagtipo, tagcor, tagdark)
         VALUES (${body.tagidambiente},'${body.tagnome}', '${body.tagdescricao}',${body.tagprioridade},${body.tagidtagtipo},'${body.tagcor}','${body.tagdark})`;
        const entity = await Builder(query);
        return entity;
    },

    // CREATE TABLE tag (
    //     id SERIAL PRIMARY KEY,
    //     tagidambiente INT NOT NULL REFERENCES ambiente(id),
    //     tagnome VARCHAR(255),
    //     tagdescricao VARCHAR(255),
    //     tagprioridade VARCHAR(255),
    //     tagidtagtipo INT NOT NULL REFERENCES tagtipo(id),
    //     tagcor VARCHAR(255),
    //     tagdark VARCHAR(1)
    // );

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


