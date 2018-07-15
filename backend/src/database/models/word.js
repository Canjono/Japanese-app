import Sequelize from 'sequelize'
import db from '../db'

const word = db.define('word', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    translation: {
        type: Sequelize.STRING
    },
    grammar: {
        type: Sequelize.STRING
    },
    story: {
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

export default word
