module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Personas', [
        {
          nomCli: 'Harold',
          apeCli: 'Medrano',
          dirCli: 'Ate Vitarte',
          dniCli: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Personas', null, {});
    },
  };