const tabela = 'notificacao';
import { Builder } from "../utils/accel.js";
import oldBuilder from "../utils/queryBuilder.js";

export default {
    async find(params) {
        const entity = await oldBuilder(
            `SELECT * FROM ${tabela}`,
        )
        return entity;
    },

    async findComentariosTarefa(id, tabelaa) {
    return new Builder(tabela)
        .select(['*'])
        .leftJoin(tabelaa, `${tabelaa}.id`, '=', 'foridtipoforum')
        .leftJoin('usuarioambiente', `foridusuarioambiente`, '=', 'usuarioambiente.id')
        // .leftJoin('colaborador', 'colidusuarioambiente', '=', dados.idUsuAmb)
        .where(`${tabelaa}.id`, '=', id) 
        .orderBy('forum.id', 'asc')
        // Variação do WHERE para utilizar valores de colunas
        //.where('colidusuario', '=', dados.idAmb)
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

    async searchLast(query) {
        return new Builder(tabela)
            .select(['forum.*'])
            .whereAll(query.where)
            .orderBy('fordatacriacao', 'desc')
            .limit(1)
            .commit();
        },

    async searchDetalhado(where) {
        return new Builder(tabela)
        .select(['*'])
        .where('notificacao.notdestinatario', '=', where.idUsuAmb)
        .commit();
    },

    async create(body) {
        return new Builder(tabela)
        .insert([
            ['notdescricao', body.notdescricao],
            ['notidusuarioambiente', body.notidusuarioambiente],
            ['notidtiponotificacao', body.notidtiponotificacao],
            ['notdatanotificacao', new Date().toISOString()],
            ['notdestinatario', body.notdestinatario],
        ])
        .commit();
    },

    async alter(body, params) {
        return new Builder(tabela)
        .set([
            ['foridusuarioambiente', body.foridusuarioambiente],
            ['forcomentario', body.forcomentario],
            ['fortipoforum', body.fortipoforum],
            ['foridtipoforum', body.foridtipoforum],
            ['fordatacriacao', body.fordatacriacao],
            ['fordataedicao', body.fordataedicao],
            ['forreacaopositiva', body.forreacaopositiva],
            ['forreacaonegativa', body.forreacaonegativa],
            ['forestrela', body.forestrela],
            ['foridforum', body.foridforum],
        ])
        .where('id', '=', params.id)
        .commit();
    },

    async solicitarSaida(params) {
        return new Builder(tabela)
        .insert([
            ['notdescricao', params.idTarefa],
            ['notidusuarioambiente', params.idUsuAmb],
            ['notidtiponotificacao', 2],
            ['notdatanotificacao', new Date().toISOString()],
            ['notdestinatario', params.idUsuAmb],
        ])
        .commit();
    },

    async delete(params) {
        return new Builder(tabela)
        .delete()
        .where('id', '=', params.id)
        .commit();
    },
}


