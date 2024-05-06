'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Laboratorios', [
      {
        razonsocial: 'Laboratorio DEF',
        direccion: 'Calle Secundaria 456',
        email: 'info@laboratoriodef.com',
        telefono: '234567890',
        contacto: 'Pedro Sánchez'
      },
      {
        razonsocial: 'Laboratorio UVW',
        direccion: 'Avenida Lateral 789',
        email: 'info@laboratoriouvw.com',
        telefono: '876543210',
        contacto: 'Ana Torres'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Laboratorios', null, {})
  }
};