import { StatusCodes } from 'http-status-codes'
const errorhandler = (err, req, res, next) => {
  const defaultError = {
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  }
  // if (err.name === 'ValidationError') {
  //   defaultError.status = StatusCodes.BAD_REQUEST
  //   defaultError.msg = Object.values(err.errors)
  //     .map((item) => item.message)
  //     .join(',')
  // }
  if (err.code && err.code === 11000) {
    defaultError.status = StatusCodes.BAD_REQUEST
    defaultError.msg = `${Object.keys(err.keyValue)} has to be uniqe`
  }
  // res.status(defaultError.status).json({ msg: err })
  res.status(defaultError.status).json({ msg: defaultError.msg })
}
export default errorhandler
