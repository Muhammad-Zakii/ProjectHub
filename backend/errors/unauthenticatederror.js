import { StatusCodes } from 'http-status-codes'
import CustomApiError from './custom-api.js'
class Unauthenticated extends CustomApiError {
  constructor(message) {
    super(message)
    this.status = StatusCodes.UNAUTHORIZED
  }
}
export default Unauthenticated
