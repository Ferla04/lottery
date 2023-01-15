import { DataTypes } from 'sequelize'
import sequelize from '../../database/sqlite.js'
import { tableName as userTable } from './users.model.js'

export const tableName = 'gameNumbers'

export const GameNumbers = sequelize.define(
  tableName,
  {
    gameNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: userTable,
        key: 'phone'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  },
  {
    tableName,
    timestamps: false
  }
)

await GameNumbers.sync()
