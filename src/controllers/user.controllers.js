import { User } from '../models/index.js'

export const getUsers = async (req, res) => {
  const users = await User.findAll()
  res.send(users)
}

export const createUser = async (req, res) => {
  const body = req.body
  const result = await User.create(body)
  res.send(result)
}
