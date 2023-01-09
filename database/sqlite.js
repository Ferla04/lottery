import Sequelize from 'sequelize'

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/db.sqlite',
  logging: false,
  define: {
    freezeTableName: false
  }
})

export default sequelize
