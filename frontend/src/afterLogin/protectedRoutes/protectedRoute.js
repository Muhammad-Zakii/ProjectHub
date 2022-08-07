import { Navigate } from 'react-router-dom'
import { useAppContext } from '../../context/appcontext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext()
  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
export default ProtectedRoute
