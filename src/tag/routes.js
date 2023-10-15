import tagController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tag', auth: TokenMiddleware, task: tagController.find },
    { method: 'get', resource: '/tag/resumo', auth: TokenMiddleware, task: tagController.findResumo },
    { method: 'get', resource: '/tag/:idAmb', auth: TokenMiddleware, task: tagController.findPorAmbiente },
    { method: 'post', resource: '/tag', auth: TokenMiddleware, task: tagController.create },
    { method: 'put', resource: '/tag/:id', auth: TokenMiddleware, task: tagController.alter },
    { method: 'delete', resource: '/tag/:id', auth: TokenMiddleware, task: tagController.delete },
]