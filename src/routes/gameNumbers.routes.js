import express from 'express'
import { createGameNumbers, deleteGameNumbers, getGameNumbers, updateGameNumbers } from '../controllers/gameNumbers.controllers.js'
import { validatorHandler } from '../middlewares/index.js'
import { createGameNumberSchema, deleteGameNumberSchema, updateGameNumberSchema } from '../schemas/gameNumbers.schema.js'

const router = express.Router()

router
  .get('/', getGameNumbers)
  .post('/', validatorHandler(createGameNumberSchema), createGameNumbers)
  .put('/:phone', validatorHandler(updateGameNumberSchema), updateGameNumbers)
  .delete('/:gameNumber', validatorHandler(deleteGameNumberSchema), deleteGameNumbers)

export default router
