import usuarioRoutes from './usuario/routes.js';
import tagPadraoRoutes from './tag-padrao/routes.js';
import tagTipoRoutes from './tag-tipo/routes.js';
import tagPadraoCategoriaRoutes from './tag-padrao-categoria/routes.js';
import ambienteRoutes from './ambiente/routes.js';
import usuarioAmbienteRoutes from './usuarioambiente/routes.js';
import tagRoutes from './tag/routes.js';
import chaveambienteRoutes from './chave-ambiente/routes.js';
import executavelRoutes from './executavel/routes.js';
import tagExecutavelRoutes from './tag-executavel/routes.js';
import tarefaRoutes from './tarefa/routes.js';
import colaboradorRoutes from './colaborador/routes.js';
import tagTarefaRoutes from './tag-tarefa/routes.js';
import forumRoutes from './forum/routes.js';
import clienteRoutes from './cliente/routes.js';
import clienteContatoRoutes from './cliente-contato/routes.js';

const rotas = usuarioRoutes.concat(
    tagRoutes,
    tagPadraoRoutes,
    tagTipoRoutes,
    tagPadraoCategoriaRoutes,
    tagExecutavelRoutes,
    tagTarefaRoutes,
    ambienteRoutes,
    usuarioAmbienteRoutes,
    chaveambienteRoutes,
    executavelRoutes,
    tarefaRoutes,
    colaboradorRoutes,
    forumRoutes,
    clienteRoutes,
    clienteContatoRoutes,
)
export default rotas


// *