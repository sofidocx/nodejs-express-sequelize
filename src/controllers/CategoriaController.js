const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const CategoriaServices = new CategoriaServices();

class CategoriaController extends Controller {
  constructor() {
    super(CategoriaServices);
  }
}

module.exports = CategoriaController;