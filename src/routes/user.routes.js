import express from 'express'
import { validatorHandler } from '../middlewares/index.js'
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.controllers.js'
import { createUserSchema, deleteUserSchema, updateUserSchema } from '../schemas/user.schema.js'

const router = express.Router()

router
  .get('/', getUsers)
  .post('/', validatorHandler(createUserSchema), createUser)
  .put('/:phone', validatorHandler(updateUserSchema), updateUser)
  .delete('/:phone', validatorHandler(deleteUserSchema), deleteUser)

export default router
