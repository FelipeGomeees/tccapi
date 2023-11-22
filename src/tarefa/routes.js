import tarefaController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tarefa', auth: TokenMiddleware, task: tarefaController.find },
    { method: 'get', resource: '/tarefa/:id', auth: TokenMiddleware, task: tarefaController.find },
    { method: 'get', resource: '/tarefa/relatorio/:idAmb', auth: TokenMiddleware, task: tarefaController.findRelatorio },
    { method: 'get', resource: '/tarefa/detalhado/todos', auth: TokenMiddleware, task: tarefaController.findDetalhado },
    { method: 'get', resource: '/tarefa/detalhado/:idTar', auth: TokenMiddleware, task: tarefaController.searchDetalhado },
    { method: 'put', resource: '/tarefa/finalizar/:idTarefa', auth: TokenMiddleware, task: tarefaController.finalizar },
    { method: 'post', resource: '/tarefa', auth: TokenMiddleware, task: tarefaController.create },
    { method: 'put', resource: '/tarefa', auth: KeyMiddleware, task: tarefaController.alter },
    { method: 'delete', resource: '/tarefa', auth: KeyMiddleware, task: tarefaController.delete },
]