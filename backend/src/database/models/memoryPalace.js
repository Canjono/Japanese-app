import Sequelize from 'sequelize'
import db from '../db'

const memoryPalace = db.define('memory_palace', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    },
    enabled: {
        type: Sequelize.BOOLEAN
    }
})

export default memoryPalace
