import UnAuthenticatedError from '../errors/unauthenticatederror.js'
import jwt from 'jsonwebtoken'
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.user = { userId: payload.userId }

    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
}
export default authenticateUser
