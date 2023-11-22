import colaboradorController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/colaborador', auth: TokenMiddleware, task: colaboradorController.find },
    { method: 'post', resource: '/colaborador', auth: TokenMiddleware, task: colaboradorController.create },
    { method: 'put', resource: '/colaborador/concluir/:idUsuAmb/:idTarefa', auth: TokenMiddleware, task: colaboradorController.concluir },
    { method: 'put', resource: '/colaborador', auth: KeyMiddleware, task: colaboradorController.alter },
    { method: 'delete', resource: '/colaborador', auth: KeyMiddleware, task: colaboradorController.delete },
]