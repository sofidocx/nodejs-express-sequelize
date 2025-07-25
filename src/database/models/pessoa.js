'use strict';
const isCpfValido = require('../../utils/validaCpfHelper.js')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });
        Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        //a matricula esta Ok ou o estudante cancelou a matricula
        scope: { status: 'matriculado' }, 
        as: 'aulasMatriculadas'
      });
        Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        //a matricula esta Ok ou o estudante cancelou a matricula
        as: 'todasAsMatriculas'
      });
    }
  }
  Pessoa.init({
    nome: { 
      type: DataTypes.STRING, 
      validate: {
        len: {
          //args - argumentos que queremos passar para o validador 
          args: [3, 30], 
          msg: 'O campo nome deve ter no mínimo três caracteres'
        }
      } 

    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, 
          msg: 'Formato do Email inválido'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfEValido: (cpf) => {
          if(!isCpfValido(cpf)) throw new Error('CPF inválido'); 
        }
      }
    }, 
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName:'pessoas', 
    paranoid:true, 
    defaultScope: {
      //o escopo padrão é aplicado onde o valor da coluna true for igual a true, só aparece a listagem de alunos com true 
      where: {
        ativo: true,
      }
    }, 
    scopes: {
      todosOsRegistros: {
        //o sequelize vai interpretar que não estamos nenhuma especificação no where, logo, ele ira considerar tudo 
        where: {}
      }
    }
  });
  return Pessoa;
};