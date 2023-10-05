const tabela = 'tagexecutavel';

import { Builder } from "../utils/accel.js";
import oldBuilder from "../utils/queryBuilder.js";

export default {
    async find() {
        return new Builder(tabela)
        .select('*')
        .commit();
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
            ['taeidtag', body.taeidtag],
            ['taeidexecutavel', body.taeidexecutavel],
            ['taeidusuarioambiente', body.taeidusuarioambiente],
        ])
        .commit();
    },

    async alter(body, params) {
        return new Builder(tabela)
        .insert([
            ['taeidtag', body.taeidtag],
            ['taeidexecutavel', body.taeidexecutave],
            ['taeidusuarioambiente', body.taeidusuarioambiente],
        ])
        .where('id', '=', params.id)
        .commit();
    },

    async del(params) {
        const query = `DELETE FROM ${tabela}`;
        const entity = (await pool.query(query)).rows;
        return entity;
    }
}


