import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (name === 'priya' && password === 'sandy123') {
      setLoginStatus('Success');
    } else {
      setLoginStatus('Fail');
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        Name:<input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
         Password:<input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{loginStatus}</p>
    </div>
  );
}

export default App;