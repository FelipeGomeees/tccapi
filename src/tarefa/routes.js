import tarefaController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tarefa', auth: TokenMiddleware, task: tarefaController.find },
    { method: 'get', resource: '/tarefa/detalhado/:idUsuAmb', auth: TokenMiddleware, task: tarefaController.findDetalhado },
    { method: 'post', resource: '/tarefa', auth: TokenMiddleware, task: tarefaController.create },
    { method: 'put', resource: '/tarefa', auth: KeyMiddleware, task: tarefaController.alter },
    { method: 'delete', resource: '/tarefa', auth: KeyMiddleware, task: tarefaController.delete },
]