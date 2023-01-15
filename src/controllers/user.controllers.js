import boom from '@hapi/boom'
import { catchAsync } from '../helpers/catchAsync.js'
import { successResponse } from '../helpers/response.js'
import { User as TABLE } from '../models/index.js'

export const getUsers = catchAsync(async (req, res) => {
  const users = await TABLE.findAll()
  successResponse(res, 200, users)
})

export const createUser = catchAsync(async (req, res) => {
  const body = req.body
  const user = await TABLE.findOne({ where: { phone: body.phone } })

  if (user) throw boom.badRequest('UsUaRiO yA ExIsTe')
  const result = await TABLE.create(body)
  successResponse(res, 200, result)
})

export const updateUser = catchAsync(async (req, res) => {
  const { phone } = req.params
  const body = req.body

  const user = await TABLE.findByPk(phone)
  if (!user) throw boom.notFound('UsUaRiO nO ExIsTe')

  await user.update(body)
  successResponse(res, 200, 'aCtUaLiZaDo')
})

export const deleteUser = catchAsync(async (req, res) => {
  const { phone } = req.params

  const user = await TABLE.findByPk(phone)
  if (!user) throw boom.notFound('UsUaRiO nO ExIsTe')

  await user.destroy()
  successResponse(res, 200, 'ElImInAdO')
})
