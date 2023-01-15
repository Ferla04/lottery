import Joi from 'joi'

const gameNumber = Joi.number().min(1)
const newNumber = Joi.number().min(1)
const phone = Joi.string().regex(/^[0-9]{10}$/)

export const createGameNumberSchema = Joi.object({
  gameNumber: gameNumber.required(),
  phone: phone.required()
})

export const updateGameNumberSchema = Joi.object({
  gameNumber: gameNumber.required(),
  newNumber: newNumber.required(),
  phone: phone.required()
})

export const deleteGameNumberSchema = Joi.object({
  gameNumber: gameNumber.required()
})
