import service from './service.js';
import responseHandler from '../utils/responseHandler.js'

// Body, Params e Query estão sempre disponiveis, especificar apenas se for usado!
export default {
    async find({ query }) {
        let entity = null;
        if (Object.keys(query).length > 0) {
            entity = await service.search(query);
        } else {
            entity = await service.find();
        }
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },

    async create(req) {
        const entity = await service.create(req);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },

    async alter(req) {
        const entity = await service.alter(req);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(200, entity);
        }
    },
    async delete(req) {
        const entity = await service.delete(req);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(200, entity);
        }
    },
    async recent({ query }) {
        const entity = await service.recent(query.id);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(200, entity);
        }
    },
    async invite({ body }) {
        const entity = await service.newInvite(body.id);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },
    async validaChave({ query }) {
        const entity = await service.validaChave(query.chave);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(200, entity);
        }
    }
}