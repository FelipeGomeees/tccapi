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
        return responseHandler(200, entity);
    },

    async all({ query }) {
        let entity = await service.all(query);
        return responseHandler(200, entity);
    },

    async create({ body }) {
        const entity = await service.create(body);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },

    async alter(req) {
        const entity = await service.alter(req);
        return entity;
    },
    async alterAll(req) {
        const entity = await service.alter(req);
        return entity;
    },
    async delete(req) {
        const entity = await service.delete(req);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(204);
        }
    },
    async deleteAll({ body }) {
        const entity = await service.deleteAll(body);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },
}