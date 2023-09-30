import service from './service.js';
import responseHandler from '../utils/responseHandler.js'

// Controller: Manipulação do REQUEST, não do BODY/PARAM/QUERY
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

    async create(req) {
        const entity = await service.create(req);
        if (entity.severity) {
            return responseHandler(500, entity);
        }
        return responseHandler(201, entity);
    },

    async alter(req) {
        const entity = await service.alter(req);
        return entity;
    },
    async delete(req) {
        const entity = await service.delete(req);
        return entity;
    },

    async novo(req) {
        const entity = await service.novo(req);
        return responseHandler(201, entity);
    }
}