import repository from './repository.js';
import tagPadraoCategoriaRepository from '../tag-padrao-categoria/repository.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },

    async findResumo(body) {
        const entity = await repository.findResumo(body);
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
        const newDados = { ...body.dados, tagdatacriacao: new Date().toISOString() };
        const entity = await repository.create(newDados);
        
        return entity;
    },

    async alter(body, params) {
        const entity = await repository.alter(body.dados, params);
        return entity;
    },

    async finalizar(body, params) {
        const entity = await repository.finalizar(body.dados, params);
        return entity;
    },

    async delete(req) {
        const entity = await repository.delete(req.params);
        return entity;
    },

    async findPorAmbiente(query) {
        const entity = await repository.findPorAmbiente(query);
        return entity;
    },

    async findPorAmbienteDividido(idAmb) {
        const entity = {
            geral: null,
            tipo: null,
            estado: null,
        }
        entity.geral = await repository.searchPorAmbiente({ where: {usaidambiente: idAmb, tagtipo: 0} });
        entity.tipo = await repository.searchPorAmbiente({ where: {usaidambiente: idAmb, tagtipo: 1} });
        entity.estado = await repository.searchPorAmbiente({ where: {usaidambiente: idAmb, tagtipo: 2} });
        return entity;
    },
}