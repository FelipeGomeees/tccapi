const tabela = 'forum';
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
        // .leftJoin('colaborador', 'colidusuarioambiente', '=', dados.idUsuAmb)
        .where(`${tabelaa}.id`, '=', id) // Variação do WHERE para utilizar valores de colunas
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

    async searchDetalhado(id) {
        return new Builder(tabela)
        .select(['*'])
        .leftJoin('executavel', 'taridexecutavel', '=', 'executavel.id')
        // .leftJoin('executavel', 'taridexecutavel', '=', 'executavel.id')
        .where('tarefa.id', '=', id)
        .commit();
    },

    async create(body) {
        return new Builder(tabela)
        .insert([
            ['taridambiente', body.taridambiente],
            ['tarnome', body.tarnome],
            ['tardescricao', body.tardescricao],
            ['taridexecutavel', body.taridexecutavel],
            ['tardataabertura', body.tardataabertura],
            ['tardataprazo', body.tardataprazo],
            ['taridtarefapai', body.taridtarefapai],
            ['tarvisibilidade', body.tarvisibilidade],
            ['tarpedirconvite', body.tarpedirconvite],
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


