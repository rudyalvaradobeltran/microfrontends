import React from 'react'
import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'

const Header = ({ data }) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          {data.text}
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
      {data.text}
    </div>
  )
}

export default Header
