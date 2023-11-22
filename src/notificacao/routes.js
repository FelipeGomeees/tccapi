import notificacaoController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/notificacao', auth: TokenMiddleware, task: notificacaoController.find },
    // { method: 'get', resource: '/notificacao/:id', auth: TokenMiddleware, task: notificacaoController.find },
    { method: 'get', resource: '/notificacao/:idUsuAmb', auth: TokenMiddleware, task: notificacaoController.searchDetalhado },
    { method: 'post', resource: '/notificacao/solicitarSaida/:idUsuAmb/:idTarefa', 
    auth: TokenMiddleware, task: notificacaoController.solicitarSaida },
    { method: 'post', resource: '/notificacao', auth: TokenMiddleware, task: notificacaoController.create },
    { method: 'put', resource: '/notificacao', auth: KeyMiddleware, task: notificacaoController.alter },
    { method: 'delete', resource: '/notificacao', auth: KeyMiddleware, task: notificacaoController.delete },
]