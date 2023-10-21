import repository from './repository.js';
import colaboradorService from '../colaborador/service.js';
import tagTarefaService from '../tag-tarefa/service.js';
import tagExecutavelService from '../tag-executavel/service.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },
    async search(body) {
        const entity = await repository.search(body);
        return entity;
    },
    async findDetalhado(params) {
        const whereCliente = {
            usaidambiente: params.idAmb,
        }
        const entity = await repository.searchDetalhado(whereCliente);
        const final = [];
        for (let i = 0; i < entity.length; i++) {
            const temp = {
                cliente: null,
                contato: null,
            }
            temp.cliente = entity[i];
           const where = {
                clcidcliente: entity[i].idCliente,
            }
            temp.contato= await clienteContatoService.search(where);
            final.push(temp);
        }
        return final;
    },
    async searchDetalhado(query) {
        const entity = await repository.searchDetalhado(query);
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
        const entity = await repository.searchDetalhado(params.idTar);
        const final = [];
        for (let i = 0; i < entity.length; i++) {
            const temp = {
                tarefa: null,
                tags: null,
                colaboradores: null,
                exectags: null,
            }
            temp.tarefa = entity[i];
            temp.tags = await tagTarefaService.findTagTarefa(params.idTar);
            temp.colaboradores = await colaboradorService.findColaboradoresTarefa(params.idTar);
            temp.exectags = await tagExecutavelService.findTagExecutavelTarefa(entity[i].taridexecutavel);
            final.push(temp);
        }
        return final;
    },
}