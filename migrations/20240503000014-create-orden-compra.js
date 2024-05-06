'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrdenCompras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaemision: {
        type: Sequelize.DATE
      },
      situacion: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.FLOAT
      },
      nrofacturaprov: {
        type: Sequelize.STRING
      },
      codlab: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'laboratorios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrdenCompras');
  }
};