import express from 'express'
import * as userControllers from '../controllers/user.controllers.js'

const router = express.Router()

router
  .get('/', userControllers.getUsers)
  .post('/', userControllers.createUser)

export default router
