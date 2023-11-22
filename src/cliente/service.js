import repository from './repository.js';
import clienteContatoService from '../cliente-contato/service.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },
    async search(body) {
        const entity = await repository.search(body);
        return entity;
    },
    async findDetalhado() {
        const entity = await repository.findDetalhado();
        const final = [];
        for (let i = 0; i < entity.length; i++) {
            const temp = {
                cliente: null,
                contato: null,
            }
            temp.cliente = entity[i];
            temp.contato= await clienteContatoService.search({where: { clcidcliente: entity[i].idcliente}});
            final.push(temp);
        }
        return final;
    },

    async searchDetalhado(query) {
        const entity = await repository.searchDetalhado(query);
        const final = [];
        for (let i = 0; i < entity.length; i++) {
            const temp = {
                cliente: null,
                contato: null,
            }
            temp.cliente = entity[i];
            temp.contato= await clienteContatoService.search({where: { clcidcliente: entity[i].idcliente}});
            final.push(temp);
        }
        return final;
    },

    async create(dados) {
        const newBody = { ...dados };
        newBody.cliente.clidatacriacao = new Date().toISOString();
        const entity = await repository.create(newBody.cliente);
        dados.contato.forEach(el => {
            const newContato = { clcidcliente: entity[0].id, ...el};
            clienteContatoService.create(newContato);
        });

        return entity;
    },

    async alter(req) {
        const entity = await repository.alter(query.where);
        return entity;
    },

    async delete(req) {
        const entity = await repository.delete(query.where);
        return entity;
    },

    async recent(id) {
        const entity = await repository.recent(id);
        return entity;
    },
}