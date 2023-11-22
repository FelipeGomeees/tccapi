import executavelController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'post', resource: '/file', auth: TokenMiddleware, task: executavelController.create },
]