const tabela = 'cliente';
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

    async findDetalhado(dados) {
    return new Builder(tabela)
        .select(['*', 'cliente.id as idCliente'])
        .leftJoin('usuarioambiente', 'cliidusuarioambiente', '=', 'usuarioambiente.id')
        // .where('usaidambiente', '=', dados.idAmb)
        .commit();
    },

    async searchDetalhado(query) {
        return new Builder(tabela)
            .select(['*', 'cliente.id as idCliente'])
            .leftJoin('usuarioambiente', 'cliidusuarioambiente', '=', 'usuarioambiente.id')
            .whereAll(query.where)
            .commit();
        },

     async create(body) {
        return new Builder(tabela)
        .insert([
            ['clinome', body.clinome],
            ['clisobrenome', body.clisobrenome],
            ['cliobservacao', body.cliobservacao],
            ['clicnpj', body.clicnpj],
            ['clicpf', body.clicpf],
            ['cliidusuarioambiente', body.cliidusuarioambiente],
            ['clidatacriacao', body.clidatacriacao],
        ])
        .commit();
    },

    async alter(body, params) {
        return new Builder(tabela)
        .set([
            ['clinome', body.clinome],
            ['clisobrenome', body.clisobrenome],
            ['cliobservacao', body.cliobservacao],
            ['clicnpj', body.clicnpj],
            ['clicpf', body.clicpf],
            ['cliidusuarioambiente', body.cliidusuarioambiente],
            ['clidatacriacao', body.clidatacriacao],
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


