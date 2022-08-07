import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Error = () => {
  return Swal.fire({
    title: '404!',
    text: 'Page Not Found',
    icon: 'error',
  })
}

export default Error
