import chaveambienteController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/chaveambiente', auth: TokenMiddleware, task: chaveambienteController.find },
    { method: 'get', resource: '/chaveambiente/valida', auth: TokenMiddleware, task: chaveambienteController.validaChave },
    { method: 'post', resource: '/chaveambiente', auth: KeyMiddleware, task: chaveambienteController.create },
    { method: 'post', resource: '/chaveambiente/invite', auth: TokenMiddleware, task: chaveambienteController.invite },
    { method: 'put', resource: '/chaveambiente', auth: KeyMiddleware, task: chaveambienteController.alter },
    { method: 'delete', resource: '/chaveambiente', auth: KeyMiddleware, task: chaveambienteController.delete },
]