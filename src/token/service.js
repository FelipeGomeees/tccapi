import repository from './repository.js';
import TokenRepository from '../token/repository.js';
import { Hasher } from '../auth/token.js';

export default {
    async find(body) {
        const entity = await repository.find(body);
        return entity;
    },
    async search(query) {
        const entity = await repository.search(query.where);
        return entity;
    },
}