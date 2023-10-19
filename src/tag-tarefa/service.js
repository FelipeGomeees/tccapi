import repository from './repository.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },
    async search(query) {
        const entity = await repository.search(query.where);
        return entity;
    },
    async create(body) {
        const entity = await repository.create(body.dados);

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

    async findDetalhado(id) {
        const entity = await repository.findDetalhado(id);
        return entity;
    },

    async findTagTarefa(id) {
        const entity = await repository.findTagTarefa(id);
        return entity;
    },
}