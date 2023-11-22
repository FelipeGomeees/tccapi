import repository from './repository.js';
import colaboradorService from '../colaborador/service.js';
import tagTarefaService from '../tag-tarefa/service.js';
import tagExecutavelService from '../tag-executavel/service.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },
    async findComentariosTarefa(params) {
        const entity = await repository.findComentariosTarefa(params.id, params.tabela);
        return entity;
    },
    async search(query) {
        const entity = await repository.search(query.where);
        return entity;
    },

    async searchLast(query) {
        const entity = await repository.searchLast(query);
        return entity;
    },

    async create(dados) {
        const entity = await repository.create(dados);
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

    async findDetalhado(params) {
        const entity = await repository.findDetalhado(params);  
        const final = [];
        for (let i = 0; i < entity.length; i++) {
            const temp = {
                tarefa: null,
                tags: null,
                colaboradores: null,
                exectags: null,
            }
            temp.tarefa = entity[i];
            temp.tags = await tagTarefaService.findTagTarefa(entity[i].idtarefa);
            temp.colaboradores = await colaboradorService.findColaboradoresTarefa(entity[i].idtarefa);
            temp.exectags = await tagExecutavelService.findTagExecutavelTarefa(entity[i].taridexecutavel);
            final.push(temp);
        }
        return final;
    },

    async searchDetalhado(params) {
        const entity = await repository.searchDetalhado(params);
        return entity;
    },

    async solicitarSaida(params) {
        const entity = await repository.solicitarSaida(params);
        return entity;
    },
}