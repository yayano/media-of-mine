import React from 'react';
import { useState } from 'react';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    const User = { username, password };
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(User),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((result) => console.log(result.json()))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};
export default Login;
