'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 3,
        CodMedicamento: 3,
        descripcion: 'Amoxicilina Suspensión Oral',
        cantidad: 8,
        precio: 12.99,
        montouni: 103.92,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NroOrdenC: 4,
        CodMedicamento: 4,
        descripcion: 'Omeprazol Cápsulas',
        cantidad: 3,
        precio: 15.75,
        montouni: 47.25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};
