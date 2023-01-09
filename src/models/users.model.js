import { DataTypes } from 'sequelize'
import sequelize from '../../database/sqlite.js'

const tableName = 'users'

export const User = sequelize.define(
  tableName,
  {
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      set (value) {
        this.setDataValue('name', value.trim().toUpperCase())
      }
    }
  },
  {
    tableName,
    timestamps: false
  }
)

await User.sync()
