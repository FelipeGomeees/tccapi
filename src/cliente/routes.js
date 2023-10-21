import clienteController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/cliente', auth: TokenMiddleware, task: clienteController.find },
    { method: 'get', resource: '/cliente/detalhado', auth: TokenMiddleware, task: clienteController.findDetalhado },
    { method: 'post', resource: '/cliente', auth: TokenMiddleware, task: clienteController.create },
    { method: 'put', resource: '/cliente', auth: KeyMiddleware, task: clienteController.alter },
    { method: 'delete', resource: '/cliente', auth: KeyMiddleware, task: clienteController.delete },
]