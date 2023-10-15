import tagExecutavelController from './controller.js';
import KeyMiddleware from '../auth/key.js'
import TokenMiddleware from '../auth/token.js'

export default [
    { method: 'get', resource: '/tagexecutavel', auth: TokenMiddleware, task: tagExecutavelController.find },
    { method: 'post', resource: '/tagexecutavel', auth: TokenMiddleware, task: tagExecutavelController.create },
    { method: 'put', resource: '/tagexecutavel/:id', auth: KeyMiddleware, task: tagExecutavelController.alter },
    { method: 'delete', resource: '/tagexecutavel', auth: TokenMiddleware, task: tagExecutavelController.delete },
    { method: 'delete', resource: '/tagexecutavel/all/:id', auth: TokenMiddleware, task: tagExecutavelController.deleteAll },
]