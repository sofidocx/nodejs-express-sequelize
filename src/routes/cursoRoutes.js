
const { Router } = require ('express'); // lib interna do express para gerenciamento de rota
const CursoController = require ('../controllers/CursoController.js');
const router = Router ();

const cursoController = new CursoController (); 

router.get('/cursos', (req, res) => cursoController.pegaCursos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.exclui(req, res));

module.exports = router; 
