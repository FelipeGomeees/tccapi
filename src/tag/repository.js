const tabela = 'tag';

import { Builder } from "../utils/accel.js";
import oldBuilder from "../utils/queryBuilder.js";

export default {
    async find() {
        return new Builder(tabela)
        .select('*')
        .commit();
    },

    async findPorAmbiente(idAmb) {
        return new Builder(tabela)
        .select(['tag.*'])
        .leftJoin('usuarioambiente', 'usuarioambiente.id', '=', 'tagidusuarioambiente')
        .leftJoin('ambiente', 'ambiente.id', '=', 'usaidambiente')
        .where('ambiente.id', '=', idAmb)
        .commit();
    },

    async searchPorAmbiente(query) {
        return new Builder(tabela)
        .select(['tag.*'])
        .leftJoin('usuarioambiente', 'usuarioambiente.id', '=', 'tagidusuarioambiente')
        .leftJoin('ambiente', 'ambiente.id', '=', 'usaidambiente')
        .whereAll(query.where)
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
            ['tagidusuarioambiente', body.tagidusuarioambiente],
            ['tagnome', body.tagnome],
            ['tagdescricao', body.tagdescricao],
            ['tagprioridade', body.tagprioridade],
            ['tagtipo', body.tagtipo],
            ['tagcor', body.tagcor],
            ['tagdark', body.tagdark],
            ['tagdatacriacao', body.tagdatacriacao],
        ])
        .commit();
    },

    async alter(body, params) {
        return new Builder(tabela)
        .set([
            ['tagidusuarioambiente', body.tagidusuarioambiente],
            ['tagnome', body.tagnome],
            ['tagdescricao', body.tagdescricao],
            ['tagprioridade', body.tagprioridade],
            ['tagtipo', body.tagtipo],
            ['tagcor', body.tagcor],
            ['tagdark', body.tagdark],
            ['tagdatacriacao', body.tagdatacriacao],
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


