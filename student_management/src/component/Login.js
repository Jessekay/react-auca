import React, { useState } from 'react'
import Button from './Button';
import AcademicUnit from './AcademicUnit';

function Login() {


  const [count, setCount] = useState(0);

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [userDoesHaveAccount, setUserDoesHaveAccount] = useState(true);

  const increment = () => {
    setCount(count + 1)
    console.log(count);

  }

  const handleLogin = () => {
    alert(`The username is ${userName} and your password is ${password}`);
  }

  const createAccount = () => {
    alert(`Your new account is registered with First name: ${firstName}, last name : ${lastName}`)
  }
  return (
    <div>
      <h1>Login Page</h1>
      {/* <p>The increment value is {count}</p>
      <button onClick={increment}>Click me</button> */}

    { userDoesHaveAccount ? (
    <div>
      <div>
        <label>User name:</label>
        <input type="text" value={userName} onChange={(n) => setUsername(n.target.value)}/>
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(p) => setPassword(p.target.value)}/>
      </div>
      <div>
        <div>
        <br/>
      </div>
        {/* <button onClick={handleLogin}>Login</button> */}
        <Button label="LOGIN" clickMe={handleLogin} styleMe={{marginRight: "20px", color: "green", backgroundColor: "yellow"}}/>
      </div>
      <div>
        <span>Don't have an account?</span>
        {/* <button onClick={() => setUserDoesHaveAccount(false)}>Create account</button> */}
        <Button label="Create account" clickMe={() => setUserDoesHaveAccount(false)} styleMe={{marginLeft: "10px", color: "blue", backgroundColor: "red"}}/>
      </div>
    </div>
      ) : (

    <div>
          <h1>Create an account</h1>
          <div>
          <label>First name</label>
          <input type="text" value={firstName} onChange={(fn) => setFirstName(fn.target.value)} placeholder='Enter your first name'/>
        </div>
        <div>
          <label>Last name</label>
          <input type='text' value={lastName} onChange={(ln) => setLastName(ln.target.value)} placeholder='Enter your last name'/>
        </div>
        <div>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          {/* <button onClick={createAccount}>Create account</button> */}
          <Button label="Create account" clickMe={() => setUserDoesHaveAccount(false)} styleMe={{marginLeft: "10px", color: "blue", backgroundColor: "red"}}/>
        </div>
        <div>
          <span>Already have an account?</span>
          {/* <button onClick={() => setUserDoesHaveAccount(true)}>Login</button> */}
          <Button label="LOGIN" clickMe={handleLogin} styleMe={{marginRight: "20px", color: "green", backgroundColor: "yellow"}}/>
        </div>
    </div>
      )
    }
    </div>
  )
}

export default Login
