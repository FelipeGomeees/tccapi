import Builder from "../utils/queryBuilder.js";

const tabela = 'usuario';

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
        const entity = await Builder(
            `SELECT * FROM ${tabela} WHERE ${where}`
        )
        return entity;
    },
    async create( idtoken, id, data ) {
        const entity = await Builder(
            `INSERT INTO token (toktoken, tokidusuario, tokdataexpiracao) VALUES ('${idtoken}', ${id}, '${data}')`
        )
        return entity;
    },
    async delete(id) {
        const entity = await Builder(`DELETE FROM token WHERE tokidusuario = ${id} RETURNING toktoken, tokidusuario, tokdataexpiracao`);
        return entity;
    }
}


