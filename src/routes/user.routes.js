import express from 'express'
import * as userControllers from '../controllers/user.controllers.js'
import { validatorHandler } from '../middlewares/index.js'
import { createUserSchema, deleteUserSchema, updateUserSchema } from '../schemas/user.schema.js'

const router = express.Router()

router
  .get('/', userControllers.getUsers)
  .post('/', validatorHandler(createUserSchema), userControllers.createUser)
  .put('/:phone', validatorHandler(updateUserSchema), userControllers.updateUser)
  .delete('/:phone', validatorHandler(deleteUserSchema), userControllers.deleteUser)

export default router
