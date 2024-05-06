'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicamentos', [
      {
        descripcionMed: 'Aspirina',
        fechaFabricacion: new Date('2023-03-15'),
        Presentacion: 'Tabletas',
        stock: 150,
        precioVentaUni: 6.99,
        precioVentaPres: 18.99,
        Marca: 'Bayer'
      },
      {
        descripcionMed: 'Amoxicilina',
        fechaFabricacion: new Date('2023-04-20'),
        Presentacion: 'Cápsulas',
        stock: 75,
        precioVentaUni: 8.49,
        precioVentaPres: 22.99,
        Marca: 'Genérico'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicamentos', null, {});
  }
};