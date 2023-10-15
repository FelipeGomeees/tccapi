import usuarioController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/usuario', auth: KeyMiddleware, task: usuarioController.find },
    { method: 'get', resource: '/usuario/login', task: usuarioController.login },
    { method: 'post', resource: '/usuario', task: usuarioController.register },
    { method: 'put', resource: '/usuario', auth: KeyMiddleware, task: usuarioController.alter },
    { method: 'delete', resource: '/usuario', auth: KeyMiddleware, task: usuarioController.delete },
]