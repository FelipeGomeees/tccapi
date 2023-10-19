import forumController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tarefa', auth: TokenMiddleware, task: forumController.find },
    { method: 'get', resource: '/tarefa/:id', auth: TokenMiddleware, task: forumController.find },
    { method: 'get', resource: '/forum/:tabela/:id', auth: TokenMiddleware, task: forumController.findTarefa },
    { method: 'post', resource: '/tarefa', auth: TokenMiddleware, task: forumController.create },
    { method: 'put', resource: '/tarefa', auth: KeyMiddleware, task: forumController.alter },
    { method: 'delete', resource: '/tarefa', auth: KeyMiddleware, task: forumController.delete },
]