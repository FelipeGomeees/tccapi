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
        const entity = await repository.create(body);
        
        return entity;
    },

    async alter(req) {
        const entity = await repository.alter(query.where);
        return entity;
    },

    async delete(req) {
        // const tagsDeletadas = await tagExecutavelRepository.deleteAll(req.params);
        const entity = await repository.delete(req.params);
        return entity;
    },

    async recent(id) {
        const entity = await repository.recent(id);
        return entity;
    },

    async findDetalhado(query) {
        const entity = await repository.findDetalhado(query);
        // const newEntity = [];
        // for (let i = 0; i < entity.length; i += 1) {
        //     const tags = await tagExecutavelRepository.findSpecific(entity[i]);
        //     const dados = entity[i];
        //     newEntity.push({ ...dados, tags });
        // }
        return entity;
    },
}