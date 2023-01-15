import userRoutes from './user.routes.js'
import gameNumbers from './gameNumbers.routes.js'

export default (app) => {
  app.use('/users', userRoutes)
  app.use('/gameNumbers', gameNumbers)
}
