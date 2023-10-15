import ambienteController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/ambiente', auth: TokenMiddleware, task: ambienteController.find },
    { method: 'post', resource: '/ambiente', auth: TokenMiddleware, task: ambienteController.create },
    { method: 'post', resource: '/ambiente/novo', auth: TokenMiddleware, task: ambienteController.novo },
    { method: 'put', resource: '/ambiente', auth: KeyMiddleware, task: ambienteController.alter },
    { method: 'delete', resource: '/ambiente', auth: KeyMiddleware, task: ambienteController.delete },
]