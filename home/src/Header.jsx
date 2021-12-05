import React from 'react'

const Header = ({ data }) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      {data.text}
    </div>
  )
}

export default Header
