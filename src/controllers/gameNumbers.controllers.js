import boom from '@hapi/boom'
import { catchAsync } from '../helpers/catchAsync.js'
import { successResponse } from '../helpers/response.js'
import { GameNumbers as TABLE, User as userTABLE } from '../models/index.js'

export const getGameNumbers = async (req, res) => {
  const result = await TABLE.findAll()
  successResponse(res, 200, result)
}

export const createGameNumbers = catchAsync(async (req, res) => {
  const body = req.body

  const number = await TABLE.findByPk(body.gameNumber)
  if (number) throw boom.badRequest('NuMeRo yA eScOgiDo')

  const user = await userTABLE.findByPk(body.phone)
  if (!user) throw boom.badRequest('UsUaRiO nO ExIsTe')

  const result = await TABLE.create(body)
  successResponse(res, 200, result)
})

export const updateGameNumbers = catchAsync(async (req, res) => {
  const { phone } = req.params
  const body = req.body

  const number = await TABLE.findOne({ where: { gameNumber: body.gameNumber, phone } })
  if (!number) throw boom.badRequest('El nUmErO nO lO tIeNe eL UsUaRio')

  const newNumber = await TABLE.findByPk(body.newNumber)
  if (newNumber) throw boom.badRequest('NuMeRo yA eScOgiDo')

  await TABLE.update({ gameNumber: body.newNumber }, { where: { gameNumber: body.gameNumber, phone } })
  successResponse(res, 200, 'aCtUaLiZaDo')
})

export const deleteGameNumbers = catchAsync(async (req, res) => {
  const { gameNumber } = req.params

  const number = await TABLE.findByPk(gameNumber)
  if (!number) throw boom.notFound('NuMeRo ExIsTeNtE')

  await number.destroy()
  successResponse(res, 200, 'ElImInAdO')
})
