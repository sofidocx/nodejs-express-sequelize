
const { Router } = require ('express'); // lib interna do express para gerenciamento de rota
const CategoriaController = require ('../controllers/CategoriaController.js');
const router = Router ();

const categoriaController = new CategoriaController (); 

router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegaUmPorId(req, res));
router.post('/categorias', (req, res) => categoriaController.criaNovo(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.exclui(req, res));

module.exports = router; 
