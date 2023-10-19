import repository from './repository.js';
import tagPadraoCategoriaRepository from '../tag-padrao-categoria/repository.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },

    async all(body) {
        const categorias = await tagPadraoCategoriaRepository.all();
        const entity = [];
        for (let i = 0; i < categorias.length; i += 1) {
            const tags = await repository.all(categorias[i].id);
            const newObj = {
                categoria: categorias[i].tpcdescricao,
                tags: tags ,
            }
            entity.push(newObj);
        }
        
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

    async alterAll(req) {
        const entity = await repository.alter(query.where);
        return entity;
    },

    async delete(req) {
        const entity = await repository.delete(req);
        return entity;
    },

    async deleteAll(req) {
        const entity = await repository.deleteAll(req);
        return entity;
    },

    async findTagExecutavelTarefa(id) {
        const entity = await repository.findTagExecutavelTarefa(id);
        return entity;
    },
}