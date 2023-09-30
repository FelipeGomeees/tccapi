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
}