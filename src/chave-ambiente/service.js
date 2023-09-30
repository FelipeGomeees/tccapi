import repository from './repository.js';
import { v4 as uuid } from "uuid";


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

    async newInvite(id) {
        try {
            const data = new Date().toISOString();
            const chave = uuid();
            const createBody = {
                chaidambiente: id,
                chachave: chave,
                chadataexpiracao: data,
            }
            const chaveCriada  = await repository.create(createBody);
            return chaveCriada ;
        } catch(e) { 
            return e
        }
    },

    async validaChave(chave) {
        const entity = await repository.validaChave(chave);
        return entity;
    }
}