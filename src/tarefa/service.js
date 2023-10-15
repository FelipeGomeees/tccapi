import repository from './repository.js';
import colaboradorService from '../colaborador/service.js';
import tagTarefaService from '../tag-tarefa/service.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },
    async findDetalhado(params) {
        const entity = await repository.findDetalhado(params.idUsuAmb);
        return entity;
    },
    async search(query) {
        const entity = await repository.search(query.where);
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

    async findDetalhado(id) {
        const entity = await repository.findDetalhado(id);     
        return entity;
    },
}