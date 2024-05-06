'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrdenCompras', [
      {
        fechaemision: new Date(),
        situacion: 'Enviada',
        total: 200.00,
        nrofacturaprov: '1122334455',
        codlab: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaemision: new Date(),
        situacion: 'Recibida',
        total: 350.00,
        nrofacturaprov: '9988776655',
        codlab: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrdenCompras', null, {})
  }
};