import React, { useEffect } from 'react'

export default function Howtosell() {
  const Fetchdata = async () => {
    try {
      const response = await fetch('/')
      const fetching = await response.json()
      console.log(fetching)
    } catch (error) {
      console.log(error)
    }

    useEffect(() => {
      Fetchdata()
    }, [])
  }

  return (
    <div>
      <h1>How to sell</h1>
    </div>
  )
}
