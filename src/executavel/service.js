import repository from './repository.js';
import tagExecutavelRepository from '../tag-executavel/repository.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },

    async findDetalhado(body) {
        const entity = await repository.findDetalhado(body);
        const newEntity = [];
        for (let i = 0; i < entity.length; i += 1) {
            const tags = await tagExecutavelRepository.findSpecific(entity[i]);
            const dados = entity[i];
            newEntity.push({ ...dados, tags });
        }
        return newEntity;
    },

    async search(query) {
        const entity = await repository.search(query.where);
        return entity;
    },

    async create(body) {
        const newDados = { ...body.dados, exedatacriacao: new Date().toISOString() };
        const entity = await repository.create(newDados);
        
        return entity;
    },

    async alter(body, params) {
        const newDados = { ...body.dados, exedatacriacao: new Date().toISOString() };
        const entity = await repository.alter(newDados, params);
        return entity;
    },

    async delete(req) {
        const tagsDeletadas = await tagExecutavelRepository.deleteAll(req.params);
        const entity = await repository.delete(req.params);
        return entity;
    },
}