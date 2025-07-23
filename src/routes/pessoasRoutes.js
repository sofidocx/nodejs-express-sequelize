
const { Router } = require ('express'); // lib interna do express para gerenciamento de rota
const PessoaController = require ('../controllers/PessoaController.js')
const router = Router ();

router.get('/pessoas', PessoaController.pegaTodas); 

module.exports = router; 
