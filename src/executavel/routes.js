import executavelController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/executavel', auth: TokenMiddleware, task: executavelController.find },
    { method: 'get', resource: '/executavel/detalhado', auth: TokenMiddleware, task: executavelController.findDetalhado },
    { method: 'get', resource: '/executavel/:idAmb', auth: TokenMiddleware, task: executavelController.findPorAmbiente },
    { method: 'post', resource: '/executavel', auth: TokenMiddleware, task: executavelController.create },
    { method: 'put', resource: '/executavel/:id', auth: TokenMiddleware, task: executavelController.alter },
    { method: 'delete', resource: '/executavel/:id', auth: TokenMiddleware, task: executavelController.delete },
]