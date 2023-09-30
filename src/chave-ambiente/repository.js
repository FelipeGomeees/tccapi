const tabela = 'chaveambiente';
import { Builder } from "../utils/accel.js";

export default {
    async find(params) {
        const entity = await Builder(
            `SELECT * FROM ${tabela}`,
        )
        return entity;
    },

    async all(params) {
        const entity = await Builder(
            `SELECT * FROM ${tabela} ORDER BY id`,
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
        return new Builder(tabela)
            .insert([
                ['chaidambiente', body.chaidambiente],
                ['chachave', body.chachave],
                ['chadataexpiracao', body.chadataexpiracao]
            ])
            .commit();
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
    },

    async validaChave(chave) {
        return new Builder(tabela)
        .select(['ambiente.id as idambiente','ambiente.ambnome', 'ambiente.ambicone'])
        .leftJoin('ambiente', 'ambiente.id','=','chaidambiente')
        .where('chachave', '=', chave)
        .commit();
    }
}


