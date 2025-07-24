
const { Router } = require ('express'); // lib interna do express para gerenciamento de rota
const PessoaController = require ('../controllers/PessoaController.js');
const router = Router ();

const pessoaController = new PessoaController (); 

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req,res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));  

module.exports = router; 
