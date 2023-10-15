import usuarioAmbienteController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/usuarioambiente', auth: TokenMiddleware, task: usuarioAmbienteController.find },
    { method: 'get', resource: '/usuarioambiente/recente/:idUseAmb', auth: TokenMiddleware, task: usuarioAmbienteController.recent },,
    { method: 'get', resource: '/usuarioambiente/detalhado', auth: TokenMiddleware, task: usuarioAmbienteController.findDetalhado },
    { method: 'post', resource: '/usuarioambiente', auth: TokenMiddleware, task: usuarioAmbienteController.create },
    { method: 'put', resource: '/usuarioambiente', auth: KeyMiddleware, task: usuarioAmbienteController.alter },
    { method: 'delete', resource: '/usuarioambiente/:idUseAmb', auth: TokenMiddleware, task: usuarioAmbienteController.delete },
]