import Sequelize from 'sequelize'

const db = new Sequelize('Vocabulary', 'root', 'root', {
    host: 'database',
    dialect: 'mysql',
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
