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
// import './App.css';
// import Header from './Header';
// import Container1 from './Container1';
// import Container2 from './Container2';
// import Footer from './Footer';
// function App() {
//   return (
//     <div>
//       <div className='header'><Header /></div>
//       <div className='container'>
//         <div className='box1'><Container1 /></div>
//         <div className='box2'><Container2 /></div>
//       </div>
//       <div className='footer'><Footer /></div>
//     </div>
//   );
// }

// export default App;
