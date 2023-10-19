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
    async findDetalhado(query) {
        const entity = await repository.findDetalhado(query);
        return entity;
    },
    async searchDetalhado(query) {
        const entity = await repository.searchDetalhado(query);
        return entity;
    },

    async create(dados) {
        const newBody = { ...dados };
        newBody.tarefa.tardataabertura = new Date().toISOString();
        newBody.tarefa.tarvisibilidade = Number(dados.tarefa.tarvisibilidade);
        newBody.tarefa.tarpedirconvite = Number(dados.tarefa.tarpedirconvite);
        const entity = await repository.create(newBody.tarefa);
        dados.colaboradores.forEach(el => {
            const colaboradorBody = { 
                colidusuarioambiente: el,
                colidtarefa: entity[0].id,
                colidresponsavel: newBody.meta.responsavel,
                coldataentrada: new Date().toISOString(),
                coldatafinalizacao: null,
                colcargo: 0,
            };
            entity[0].id
            colaboradorService.create({ dados: colaboradorBody });
        });
        dados.tags.forEach(el => {
            const tagBody = { 
                tatidusuarioambiente: newBody.meta.responsavel,
                tatidtarefa: entity[0].id,
                tatidtag: el,
            };
            tagTarefaService.create({ dados: tagBody });
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