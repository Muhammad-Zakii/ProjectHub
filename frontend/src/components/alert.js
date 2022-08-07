import React from 'react'
import { useAppContext } from '../context/appcontext'
import 'react-toastify/dist/ReactToastify.css'

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
  //   return toast({
  //     position: toast.POSITION.TOP_RIGHT,
  //     className: `${alertType}`,
  //     progressClassName: `${alertText}`,
  //     autoClose: 6000,
  //     toastId: 2,
  //   })
}
export default Alert
