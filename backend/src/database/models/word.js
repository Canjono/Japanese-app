import Sequelize from 'sequelize'
import db from '../db'

const Word = db.define('word', {
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
    }
})

export default Word
