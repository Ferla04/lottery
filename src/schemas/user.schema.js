import Joi from 'joi'

const phone = Joi.string().regex(/^[0-9]{10}$/)
const name = Joi.string().min(3).regex(/^[A-Z]+$/i)

export const createUserSchema = Joi.object({
  phone: phone.required(),
  name: name.required()
})
