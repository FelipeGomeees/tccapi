import tagPadraoCategoriaController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tagpadraocategoria', auth: TokenMiddleware, task: tagPadraoCategoriaController.find },
    { method: 'post', resource: '/tagpadraocategoria', auth: KeyMiddleware, task: tagPadraoCategoriaController.create },
    { method: 'put', resource: '/tagpadraocategoria', auth: KeyMiddleware, task: tagPadraoCategoriaController.alter },
    { method: 'delete', resource: '/tagpadraocategoria', auth: KeyMiddleware, task: tagPadraoCategoriaController.delete },
]