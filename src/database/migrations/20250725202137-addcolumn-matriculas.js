'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('matriculas', 'deletedAt', {
      allowNull: true, //todos os registros nessa coluna deverão ser nulos ate ter uma exclusão
      type: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('matriculas', 'deletedAt');
  }
};