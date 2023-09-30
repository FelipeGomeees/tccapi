import repository from './repository.js';
import TokenRepository from '../token/repository.js';
import { Hasher } from '../auth/token.js';
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
        // LEMBRAR DO HASHER, AAAAAAAA
        const hash = await Hasher(req.body.senha);
        const entity = await repository.create(req.body, hash);
        
        return entity;
    },

    async login(query) {
        try {
            const user = await repository.search(query.where);
            if (user.length) {
                const data = new Date().toISOString();
                const idtoken = uuid();
                const id = user[0].id;
                const token = await TokenRepository.delete(id);
                await TokenRepository.create(
                    idtoken,
                    id,
                    data,
                );
                return token;
            } else {
                return null;
            }
        } catch(e) {
            return e
        }
    },

    // async alter(req) 
    //     return 'alter';
    // },
    async delete(req) {
        return 'delete';
    },
}