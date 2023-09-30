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
    async create(req) {
        const entity = await repository.create(req.body);
        
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
}