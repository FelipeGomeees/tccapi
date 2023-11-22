const tabela = 'usuarioambiente';
import { Builder } from "../utils/accel.js";
import OldBuilder from "../utils/queryBuilder.js";

export default {
    async find(params) {
        const entity = await OldBuilder(
            `SELECT * FROM ${tabela}`,
        )
        return entity;
    },

    async all(params) {
        const entity = await OldBuilder(
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
        const entity = await OldBuilder(
            query
        )
        return entity;
    },
    async create(body) {
        return new Builder(tabela)
        .insert([
            ['usaidambiente', body.usaidambiente],
            ['usaidusuario', body.usaidusuario],
            ['usaapelido', body.usaapelido],
            ['usadescricao', body.usadescricao],
            ['usadataprimeiroacesso', body.usadataprimeiroacesso],
            ['usadataultimoacesso', body.usadataultimoacesso],
            ['usaicone', body.usaicone],
        ])
        .commit();
    },

    async alter(params) {
        const query = `UPDATE ${tabela} SET`;
        const entity = (await pool.query(query)).rows;
        return entity;
    },
    async delete(params) {
        return new Builder(tabela)
        .delete()
        .where('id', '=', params.idUseAmb)
        .commit();
    },
    async recent(id) {
        return new Builder(tabela)
            .select(['ambiente.id as idambiente','ambiente.ambnome', 'ambiente.ambicone'])
            .leftJoin('ambiente', 'ambiente.id','=','usaidambiente')
            .where('usaidusuario', '=', id)
            .orderBy('usadataultimoacesso', 'desc')
            .commit();
    },

    async findDetalhado(query) {
        return new Builder(tabela)
        .select(['usuarioambiente.id','usaapelido','usunome','usuemail','usadescricao', 'usadataprimeiroacesso'])
        .leftJoin('usuario', 'usuario.id','=','usaidusuario')
        .where('usaidambiente', '=', query.idAmb)
        .andAll(query.where)
        .orderBy('usaapelido', 'desc')
        .commit();
    },
}

