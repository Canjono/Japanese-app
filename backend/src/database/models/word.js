import Sequelize from 'sequelize'
import db from '../db'

const word = db.define('word', {
    id: {
        type: Sequelize.STRING,
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
    created: {
        type: Sequelize.DATE
    },
    updated: {
        type: Sequelize.DATE
    }
})

export default word
