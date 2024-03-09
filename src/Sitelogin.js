import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const NameChange = (e) => {
    setName(e.target.value);
  };

  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const Login = () => {
    if (name === 'priya' && password === 'sandy123') {
      setLoginStatus('Success');
    } else {
      setLoginStatus('Fail');
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <div>
        Name:<input type="text" value={name} onChange={NameChange} />
      </div>
      <div>
         Password:<input type="password" value={password} onChange={PasswordChange} />
      </div>
      <button onClick={Login}>Login</button>
      <p>{loginStatus}</p>
    </div>
  );
}

export default App;