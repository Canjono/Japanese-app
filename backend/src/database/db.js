import Sequelize from 'sequelize'

const db = new Sequelize('Vocabulary', 'postgres', 'postgres', {
    host: 'database',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    define: {
        timestamps: false
    }
})

export default db
