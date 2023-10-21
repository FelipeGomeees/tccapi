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

    async findDetalhado({ query }) {
        let entity = null;
        if (Object.keys(query).length > 0) {
            entity = await service.searchDetalhado(query);
        } else {
            entity = await service.findDetalhado();
        }
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },

    async findDetalhado({ params }) {
        let entity = await service.findDetalhado(params);
        if (entity instanceof Error) {
            return responseHandler(500, { message: entity.message, stack: entity.stack });
        } else {
            return responseHandler(201, entity);
        }
    },

    async create({ body }) {
        const entity = await service.create(body.dados);
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

    
}