import React, { useState } from 'react'
import { login, useLoggedIn } from './cart'

const Login = () => {
  const loggedIn = useLoggedIn()
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('sally')
  const [password, setPassword] = useState('123')

  if (loggedIn) return null

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        Show login
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800"
          style={{
            width: 300, top: "2rem", left: -250, backgroundColor: '#fff'
          }}
        >
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <button
            className="bg-green-900 text-white py-2 px-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  )
}

export default Login