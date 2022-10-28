import Button from 'components/Button/Button';
import { useStoreMap } from 'effector-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthStore from 'stores/auth/AuthStore';
import loginUseCase from 'useCases/auth/LoginUseCase';
import logo from '../../assets/images/logo-vertical.png';
import Input from '../../components/Input/Input';
import './Login.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('tccIF$P2022');
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage] = useStoreMap({
    store: AuthStore,
    keys: [],
    fn: (state) => [state.errorMessage],
  });

  const handleLogin = async () => {
    setIsLoading(true);
    const logged = await loginUseCase({ email, password });

    if (logged) {
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="jsi-login-page">
      <div className="jsi-login-page-logo-section">
        <img src={logo} alt="" />
      </div>
      <div className="jsi-login-page-form-section">
        <h1>Login</h1>
        <form>
          <div className="jsi-login-form-group">
            <label htmlFor="">E-mail</label>
            <Input
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
              onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && console.log({ e })}
              type="email"
            />
          </div>
          <div className="jsi-login-form-group">
            <label htmlFor="">Senha</label>
            <Input
              value={password}
              onInput={(e) => setPassword(e.currentTarget.value)}
              onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleLogin()}
              type="password"
            />
          </div>
          {errorMessage && <p className='jsi-auth-form-error-message'>{errorMessage}</p>}
          <Button onClick={handleLogin}>{isLoading ? 'Carregando...' : 'Entrar'}</Button>

          <Link to="/register">Cadastrar-se</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
