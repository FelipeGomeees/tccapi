import tagPadraoController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tagpadrao', auth: TokenMiddleware, task: tagPadraoController.find },
    { method: 'get', resource: '/tagpadrao/all', auth: TokenMiddleware, task: tagPadraoController.all },
    { method: 'post', resource: '/tagpadrao', auth: KeyMiddleware, task: tagPadraoController.create },
    { method: 'put', resource: '/tagpadrao', auth: KeyMiddleware, task: tagPadraoController.alter },
    { method: 'delete', resource: '/tagpadrao', auth: KeyMiddleware, task: tagPadraoController.delete }, 
]