import React, { useState, useEffect } from 'react'
import Login from './Login'
import { jwt } from './cart'

const CartContent = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ''));
  }, [])

  return (
    <div>
      <Login />
      Jwt: {token}
    </div>
  )
}

export default CartContent
