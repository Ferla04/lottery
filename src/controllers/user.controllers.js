import boom from '@hapi/boom'
import { catchAsync } from '../helpers/catchAsync.js'
import { successResponse } from '../helpers/response.js'
import { User } from '../models/index.js'

export const getUsers = async (req, res) => {
  const users = await User.findAll()
  res.send(users)
}

export const createUser = catchAsync(async (req, res) => {
  const body = req.body
  const user = await User.findOne({ where: { phone: body.phone } })

  if (user) throw boom.badRequest('UsUaRiO yA ExIsTe')
  const result = await User.create(body)
  res.send(result)
})

export const updateUser = catchAsync(async (req, res) => {
  const { phone } = req.params
  const body = req.body

  const user = await User.findByPk(phone)
  if (!user) throw boom.notFound('UsUaRiO nO ExIsTe')

  await user.update(body)
  successResponse(res, 200, 'aCtUaLiZaDo')
})

export const deleteUser = catchAsync(async (req, res) => {
  const { phone } = req.params

  const user = await User.findByPk(phone)
  if (!user) throw boom.notFound('UsUaRiO nO ExIsTe')

  await user.destroy()
  successResponse(res, 200, 'ElImInAdO')
})
