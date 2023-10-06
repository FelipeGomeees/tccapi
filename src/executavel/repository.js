const tabela = 'executavel';

import { Builder } from "../utils/accel.js";
import oldBuilder from "../utils/queryBuilder.js";

export default {
    async find() {
        return new Builder(tabela)
        .select('*')
        .commit();
    },

    async findDetalhado() {
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
            ['exeidusuarioambiente', body.exeidusuarioambiente],
            ['exenome', body.exenome],
            ['exedescricao', body.exedescricao],
            ['exedatacriacao', body.exedatacriacao],
            ['exeversao', body.exeversao],
            ['exeurl', body.exeurl],
        ])
        .commit();
    },

    async alter(body, params) {
        return new Builder(tabela)
        .set([
            ['exeidusuarioambiente', body.exeidusuarioambiente],
            ['exenome', body.exenome],
            ['exedescricao', body.exedescricao],
            ['exedatacriacao', body.exedatacriacao],
            ['exeversao', body.exeversao],
            ['exeurl', body.exeurl],
        ])
        .where('id', '=', params.id)
        .commit();
    },

    async delete(params) {
        return new Builder(tabela)
        .delete()
        .where('id', '=', params.id)
        .commit();
    }
}


