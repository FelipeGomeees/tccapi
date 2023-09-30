import repository from './repository.js';
import usuarioAmbienteRepository from '../usuarioambiente/repository.js'
import tagRepository from '../tag/repository.js'
import tagpadraoRepository from '../tag-padrao/repository.js'
// import permissaopadraoRepository from '../permissaopadrao/repository.js'
// import permissaoRepository from '../permissao/repository.js'

// Service: Manipulação do BODY/PARAM/QUERY, não do REQUEST
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

    async novo(req) {
        let entity = null;
        const now = new Date().toISOString();
        // NOW COMO PARAMETRO ESTÁ ERRADO
        const newDados = { ...req.body.dados, now }
        const ambiente = await repository.create(newDados);
        if (ambiente.length) {
            const bodyUsuarioAmbiente = {
                usaidambiente: ambiente[0].id,
                usaidusuario: req.body.dados.usuario,
                usaapelido: '',
                usadescricao: '',
                usadataprimeiroacesso: new Date().toISOString(),
                usadataultimoacesso: new Date().toISOString(),
                usaicone: '',
            }
            const usuarioAmbiente = await usuarioAmbienteRepository.create(bodyUsuarioAmbiente);
            if (usuarioAmbiente) {
                // gera tags
            } else {
                const del = await repository.delete();
                return entity;
            }
        } else {
            return entity;
        }
        return entity;
    }
}