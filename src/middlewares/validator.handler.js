import { errorResponse } from '../helpers/response.js'

export const validatorHandler = schema => {
  return (req, res, next) => {
    const data = { ...req.body, ...req.params, ...req.query }
    const { error } = schema.validate(data)

    if (!error) return next()

    errorResponse(res, 400, error)
  }
}
