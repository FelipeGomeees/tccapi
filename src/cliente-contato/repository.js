const tabela = 'clientecontato';
import { Builder } from "../utils/accel.js";

export default {
    async find() {
        return new Builder(tabela)
        .select('*')
        .commit();
    },

    async search(query) {
        return new Builder(tabela)
        .select('*')
        .whereAll(query.where)
        .commit();
    },

     async create(body) {
        return new Builder(tabela)
        .insert([
            ['clcidcliente', body.clcidcliente],
            ['clctipocontato', body.clctipocontato],
            ['clccontato', body.clccontato],
            // ['clcobservacao', body.clcobservacao],
        ])
        .commit();
    },

    async alter(body, params) {
        return new Builder(tabela)
        .set([
            ['clcidcliente', body.clcidcliente],
            ['clctipocontato', body.clctipocontato],
            ['clccontato', body.clccontato],
            // ['clcobservacao', body.clcobservacao],
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


