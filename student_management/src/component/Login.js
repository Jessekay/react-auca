import React, { useState } from 'react'

function Login() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
    console.log(count);

  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>The increment value is {count}</p>
      <button onClick={increment}>Click me</button>
    </div>
  )
}

export default Login
