// LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (status) => {
    if (username === 'admin' && password === 'password') {
      onLogin(true);
    } else {
      onLogin(false);
    }
  };
  return (
      <form className="user" onSubmit={handleLogin}>
        <div class="form-group">
            <input type="text" class="form-control form-control-user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디를 입력해 주세요." />
        </div>
        <div class="form-group">
            <input type="password" class="form-control form-control-user"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword" placeholder="비밀번호를 입력해 주세요." />
        </div>
        <a onClick={handleLogin} class="btn btn-primary btn-user btn-block">
            Login
        </a>
    </form>
  );
};

export default LoginForm;
