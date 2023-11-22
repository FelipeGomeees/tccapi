import forumController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/forum', auth: TokenMiddleware, task: forumController.find },
    { method: 'get', resource: '/forum/:id', auth: TokenMiddleware, task: forumController.find },
    { method: 'get', resource: '/forum/:tabela/:id', auth: TokenMiddleware, task: forumController.findTarefa },
    { method: 'post', resource: '/forum', auth: TokenMiddleware, task: forumController.create },
    { method: 'put', resource: '/forum', auth: KeyMiddleware, task: forumController.alter },
    { method: 'delete', resource: '/forum', auth: KeyMiddleware, task: forumController.delete },
]