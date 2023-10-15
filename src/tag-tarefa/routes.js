import tagTarefaController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tagtarefa', auth: TokenMiddleware, task: tagTarefaController.find },
    { method: 'post', resource: '/tagtarefa', auth: TokenMiddleware, task: tagTarefaController.create },
    { method: 'put', resource: '/tagtarefa', auth: KeyMiddleware, task: tagTarefaController.alter },
    { method: 'delete', resource: '/tagtarefa', auth: KeyMiddleware, task: tagTarefaController.delete },
]