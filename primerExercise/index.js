const expressLib = require('express');
const SequelizeLib = require('sequelize');
const server = expressLib();

// Configuración de la conexión a la base de datos
const dbConnection = new SequelizeLib('s8lab1', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

// Definición de modelos
const medicineTypeModel = dbConnection.define('medicineType', {
    "CodTipoMed": { type: SequelizeLib.INTEGER, primaryKey: true },
    "description": SequelizeLib.STRING
}, {
    tableName: "tipomedic"
});

const specialtyModel = dbConnection.define('specialty', {
    "CodEspec": { type: SequelizeLib.INTEGER, primaryKey: true },
    "descriptionEsp": SequelizeLib.STRING
}, {
    tableName: "especialidad"
});

const medicineModel = dbConnection.define("medicine", {
    "CodMedicamento": { type: SequelizeLib.INTEGER, primaryKey: true },
    "descriptionMed": SequelizeLib.STRING,
    "manufactureDate": SequelizeLib.DATE,
    "Presentation": SequelizeLib.STRING,
    "inventory": SequelizeLib.INTEGER,
    "unitSalePrice": SequelizeLib.FLOAT,
    "prescriptionSalePrice": SequelizeLib.FLOAT,
    "CodTipoMed": SequelizeLib.INTEGER,
    "Brand": SequelizeLib.STRING,
    "CodEspec": SequelizeLib.INTEGER
}, {
    tableName: "medicamento",
    timestamps: false
});

// Relaciones entre modelos
medicineModel.belongsTo(medicineTypeModel, { foreignKey: 'CodTipoMed', as: 'MedicineType' });
medicineModel.belongsTo(specialtyModel, { foreignKey: 'CodEspec', as: 'Specialty' });

// Autenticación de la conexión a la base de datos
dbConnection.authenticate()
    .then(() => {
        console.log('Database connection successful');
    })
    .catch(error => {
        console.error('Database connection error:', error);
    });

// Consultas a los modelos
medicineTypeModel.findAll({ attributes: ['CodTipoMed', 'description'] })
    .then(medicineTypes => {
        console.log("--------------------------------------------");
        console.log("MEDICINE TYPES RECORDS");
        medicineTypes.forEach(medicineType => {
            console.log(JSON.stringify(medicineType));
        });
    })
    .catch(error => {
        console.error('Error fetching medicine types:', error);
    });

specialtyModel.findAll({ attributes: ['CodEspec', 'descriptionEsp'] })
    .then(specialties => {
        console.log("--------------------------------------------");
        console.log("SPECIALTIES RECORDS");
        specialties.forEach(specialty => {
            console.log(JSON.stringify(specialty));
        });
    })
    .catch(error => {
        console.error('Error fetching specialties:', error);
    });

medicineModel.findAll({
    include: [
        { model: medicineTypeModel, attributes: ['description'], as: 'MedicineType' },
        { model: specialtyModel, attributes: ['descriptionEsp'], as: 'Specialty' }
    ]
})
    .then(medicines => {
        console.log("--------------------------------------------");
        console.log("MEDICINES RECORDS");
        medicines.forEach(medicine => {
            console.log(JSON.stringify(medicine));
        });
    })
    .catch(error => {
        console.error('Error fetching medicines:', error);
    });

// Iniciar el servidor
server.listen(3000, () => {
    console.log('Server connected');
});
