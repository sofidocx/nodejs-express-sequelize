'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      //cursos pertence a uma categoria, e uma categoria tem vários cursos
        Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
        Curso.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });
       Curso.hasMany(models.Matricula, {
        foreignKey: 'curso_id'
      });
      
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos', 
    paranoid:true,
  });
  return Curso;
};