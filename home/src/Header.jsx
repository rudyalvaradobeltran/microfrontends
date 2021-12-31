import React from 'react'
import { Link } from 'react-router-dom'
import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'

const Header = ({ data }) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">{data.text}</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">Cart</Link>
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
