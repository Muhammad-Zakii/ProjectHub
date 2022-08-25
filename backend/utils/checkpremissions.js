import { Unauthenticated } from '../errors/index.js'

const checkpremissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return

  throw new Unauthenticated('Not access to authorize this route.')
}

export default checkpremissions
