import tagTipoController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tagtipo', auth: TokenMiddleware, task: tagTipoController.find },
    { method: 'post', resource: '/tagtipo', auth: KeyMiddleware, task: tagTipoController.create },
    { method: 'put', resource: '/tagtipo', auth: KeyMiddleware, task: tagTipoController.alter },
    { method: 'delete', resource: '/tagtipo', auth: KeyMiddleware, task: tagTipoController.delete },
]