const tabela = 'tagtarefa';
import { Builder } from "../utils/accel.js";
import oldBuilder from "../utils/queryBuilder.js";

export default {
    async find(params) {
        const entity = await oldBuilder(
            `SELECT * FROM ${tabela}`,
        )
        return entity;
    },

    async find(params) {
        const entity = await oldBuilder(
            `SELECT * FROM ${tabela}`,
        )
        return entity;
    },

    async findTagTarefa(idTarefa) {
        return new Builder(tabela)
            .select(['tag.*'])
            .leftJoin('tag', 'tag.id', '=', 'tatidtag')
            .where('tatidtarefa', '=', idTarefa)
            .commit();
    },

    async findDetalhado(id) {
        return new Builder(tabela)
        .select('*')
        .leftJoin('ambiente', 'ambidambiente', '=', 'taridusuarioambiente')
        .where('ambidambiente', '=', id)
        .commit();
    },

    async all(params) {
        const entity = await oldBuilder(
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
        const entity = await oldBuilder(
            query
        )
        return entity;
    },
    async create(body) {
        return new Builder(tabela)
        .insert([
            ['tatidusuarioambiente', body.tatidusuarioambiente],
            ['tatidtarefa', body.tatidtarefa],
            ['tatidtag', body.tatidtag],
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
    async recent(id) {
        return new Builder(tabela)
            .select(['ambiente.id as idambiente','ambiente.ambnome', 'ambiente.ambicone'])
            .leftJoin('ambiente', 'ambiente.id','=','usaidambiente')
            .where('usaidusuario', '=', id)
            .orderBy('usadataultimoacesso', 'desc')
            .commit();
    },
}


