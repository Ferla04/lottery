import userRoutes from './user.routes.js'

export default (app) => {
  app.use('/users', userRoutes)
}
