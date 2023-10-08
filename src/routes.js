import usuarioController from './usuario/controller.js';
import tagPadraoController from './tag-padrao/controller.js';
import tagTipoController from './tag-tipo/controller.js';
import tagPadraoCategoriaController from './tag-padrao-categoria/controller.js';
import ambienteController from './ambiente/controller.js';
import usuarioAmbienteController from './usuarioambiente/controller.js';
import tagController from './tag/controller.js';
import chaveambienteController from './chave-ambiente/controller.js';
import executavelController from './executavel/controller.js';
import tagExecutavelController from './tag-executavel/controller.js';

import KeyMiddleware from './auth/key.js'
import TokenMiddleware from './auth/token.js'


export default [
    { method: 'get', resource: '/usuario', auth: KeyMiddleware, task: usuarioController.find },
    { method: 'get', resource: '/usuario/login', task: usuarioController.login },
    { method: 'post', resource: '/usuario', task: usuarioController.register },
    { method: 'put', resource: '/usuario', auth: KeyMiddleware, task: usuarioController.alter },
    { method: 'delete', resource: '/usuario', auth: KeyMiddleware, task: usuarioController.delete },

    { method: 'get', resource: '/tagpadrao', auth: TokenMiddleware, task: tagPadraoController.find },
    { method: 'get', resource: '/tagpadrao/all', auth: TokenMiddleware, task: tagPadraoController.all },
    { method: 'post', resource: '/tagpadrao', auth: KeyMiddleware, task: tagPadraoController.create },
    { method: 'put', resource: '/tagpadrao', auth: KeyMiddleware, task: tagPadraoController.alter },
    { method: 'delete', resource: '/tagpadrao', auth: KeyMiddleware, task: tagPadraoController.delete },
    
    
    { method: 'get', resource: '/tagtipo', auth: TokenMiddleware, task: tagTipoController.find },
    { method: 'post', resource: '/tagtipo', auth: KeyMiddleware, task: tagTipoController.create },
    { method: 'put', resource: '/tagtipo', auth: KeyMiddleware, task: tagTipoController.alter },
    { method: 'delete', resource: '/tagtipo', auth: KeyMiddleware, task: tagTipoController.delete },
    
    { method: 'get', resource: '/tagpadraocategoria', auth: TokenMiddleware, task: tagPadraoCategoriaController.find },
    { method: 'post', resource: '/tagpadraocategoria', auth: KeyMiddleware, task: tagPadraoCategoriaController.create },
    { method: 'put', resource: '/tagpadraocategoria', auth: KeyMiddleware, task: tagPadraoCategoriaController.alter },
    { method: 'delete', resource: '/tagpadraocategoria', auth: KeyMiddleware, task: tagPadraoCategoriaController.delete },

    { method: 'get', resource: '/tagexecutavel', auth: TokenMiddleware, task: tagExecutavelController.find },
    { method: 'post', resource: '/tagexecutavel', auth: TokenMiddleware, task: tagExecutavelController.create },
    { method: 'put', resource: '/tagexecutavel/:id', auth: KeyMiddleware, task: tagExecutavelController.alter },
    { method: 'delete', resource: '/tagexecutavel', auth: TokenMiddleware, task: tagExecutavelController.delete },
    { method: 'delete', resource: '/tagexecutavel/all/:id', auth: TokenMiddleware, task: tagExecutavelController.deleteAll },

    { method: 'get', resource: '/tag', auth: TokenMiddleware, task: tagController.find },
    { method: 'get', resource: '/tag/resumo', auth: TokenMiddleware, task: tagController.findResumo },
    { method: 'post', resource: '/tag', auth: TokenMiddleware, task: tagController.create },
    { method: 'put', resource: '/tag/:id', auth: TokenMiddleware, task: tagController.alter },
    { method: 'delete', resource: '/tag/:id', auth: TokenMiddleware, task: tagController.delete },


    { method: 'get', resource: '/ambiente', auth: TokenMiddleware, task: ambienteController.find },
    { method: 'post', resource: '/ambiente', auth: TokenMiddleware, task: ambienteController.create },
    { method: 'post', resource: '/ambiente/novo', auth: TokenMiddleware, task: ambienteController.novo },
    { method: 'put', resource: '/ambiente', auth: KeyMiddleware, task: ambienteController.alter },
    { method: 'delete', resource: '/ambiente', auth: KeyMiddleware, task: ambienteController.delete },

    { method: 'get', resource: '/usuarioambiente', auth: TokenMiddleware, task: usuarioAmbienteController.find },
    { method: 'get', resource: '/usuarioambiente/recente', auth: TokenMiddleware, task: usuarioAmbienteController.recent },
    { method: 'post', resource: '/usuarioambiente', auth: TokenMiddleware, task: usuarioAmbienteController.create },
    { method: 'put', resource: '/usuarioambiente', auth: KeyMiddleware, task: usuarioAmbienteController.alter },
    { method: 'delete', resource: '/usuarioambiente', auth: KeyMiddleware, task: usuarioAmbienteController.delete },

    { method: 'get', resource: '/executavel', auth: TokenMiddleware, task: executavelController.find },
    { method: 'get', resource: '/executavel/detalhado', auth: TokenMiddleware, task: executavelController.findDetalhado },
    { method: 'post', resource: '/executavel', auth: TokenMiddleware, task: executavelController.create },
    { method: 'put', resource: '/executavel/:id', auth: TokenMiddleware, task: executavelController.alter },
    { method: 'delete', resource: '/executavel/:id', auth: TokenMiddleware, task: executavelController.delete },

    { method: 'get', resource: '/chaveambiente', auth: TokenMiddleware, task: chaveambienteController.find },
    { method: 'get', resource: '/chaveambiente/valida', auth: TokenMiddleware, task: chaveambienteController.validaChave },
    { method: 'post', resource: '/chaveambiente', auth: KeyMiddleware, task: chaveambienteController.create },
    { method: 'post', resource: '/chaveambiente/invite', auth: TokenMiddleware, task: chaveambienteController.invite },
    { method: 'put', resource: '/chaveambiente', auth: KeyMiddleware, task: chaveambienteController.alter },
    { method: 'delete', resource: '/chaveambiente', auth: KeyMiddleware, task: chaveambienteController.delete },

    // { method: 'get', resource: '/permissao', auth: TokenMiddleware, task: permissaoController.find },
    // { method: 'post', resource: '/permissao', auth: KeyMiddleware, task: permissaoController.create },
    // { method: 'put', resource: '/permissao', auth: KeyMiddleware, task: permissaoController.alter },
    // { method: 'delete', resource: '/permissao', auth: KeyMiddleware, task: permissaoController.delete },

    // { method: 'get', resource: '/permissaoinicial', auth: TokenMiddleware, task: permissaoInicialController.find },
    // { method: 'post', resource: '/permissaoinicial', auth: KeyMiddleware, task: permissaoInicialController.create },
    // { method: 'put', resource: '/permissaoinicial', auth: KeyMiddleware, task: permissaoInicialController.alter },
    // { method: 'delete', resource: '/permissaoinicial', auth: KeyMiddleware, task: permissaoInicialController.delete },

    // { method: 'get', resource: '/permissaocategoria', auth: TokenMiddleware, task: permissaoCategoriaController.find },
    // { method: 'post', resource: '/permissaocategoria', auth: KeyMiddleware, task:  permissaoCategoriaController.create },
    // { method: 'put', resource: '/permissaocategoria', auth: KeyMiddleware, task:  permissaoCategoriaController.alter },
    // { method: 'delete', resource: '/permissaocategoria', auth: KeyMiddleware, task: permissaoCategoriaController.delete },

    // { method: 'get', resource: '/usuariopermissao', auth: TokenMiddleware, task: usuarioPermissaoController.find },
    // { method: 'post', resource: '/usuariopermissao', auth: KeyMiddleware, task: usuarioPermissaoController.create },
    // { method: 'put', resource: '/usuariopermissao', auth: KeyMiddleware, task: usuarioPermissaoController.alter },
    // { method: 'delete', resource: '/usuariopermissao', auth: KeyMiddleware, task: usuarioPermissaoController.delete },
]


// *