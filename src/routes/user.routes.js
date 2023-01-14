import express from 'express'
import * as userControllers from '../controllers/user.controllers.js'
import { validatorHandler } from '../middlewares/validator.handler.js'
import { createUserSchema } from '../schemas/user.schema.js'

const router = express.Router()

router
  .get('/', userControllers.getUsers)
  .post('/', validatorHandler(createUserSchema), userControllers.createUser)

export default router
