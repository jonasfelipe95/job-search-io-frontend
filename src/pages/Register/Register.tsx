import Button from 'components/Button/Button';
import { useStoreMap } from 'effector-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserStore from 'stores/user/UserStore';
import userRegisterUseCase from 'useCases/user/RegisterUseCase';
import logo from '../../assets/images/logo-vertical.png';
import Input from '../../components/Input/Input';
import './Register.scss';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('tccIF$P2022');
  const [confirmPassword, setConfirmPassword] = useState('tccIF$P2022');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [errorMessage] = useStoreMap({
    store: UserStore,
    keys: [],
    fn: (state) => [state.errorMessage],
  });

  const handleRegister = async () => {
    setIsLoading(true);

    const registered = await userRegisterUseCase({
      name,
      email,
      cpf,
      walletAddress,
      password,
      confirmPassword,
    });

    if (registered) {
      setTimeout(() => {
        setName('');
        setEmail('');
        setCpf('');
        setWalletAddress('');
        setPassword('');
        setConfirmPassword('');
        setIsLoading(false);
        navigate('/login');
      }, 300);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="jsi-register-page">
      <div className="jsi-register-page-logo-section">
        <img src={logo} alt="" />
      </div>
      <div className="jsi-register-page-form-section">
        <h1>Cadastro</h1>
        <form>
          <div className="jsi-register-form-col">
            <div className="jsi-register-form-group">
              <label htmlFor="">Nome</label>
              <Input
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
                onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleRegister()}
                type="text"
              />
            </div>
            <div className="jsi-register-form-group">
              <label htmlFor="">E-mail</label>
              <Input
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
                onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleRegister()}
                type="email"
              />
            </div>
            <div className="jsi-register-form-group">
              <label htmlFor="">Senha</label>
              <Input
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
                onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleRegister()}
                type="password"
              />
            </div>
          </div>
          <div className="jsi-register-form-col">
            <div className="jsi-register-form-group">
              <label htmlFor="">CPF</label>
              <Input
                value={cpf}
                onInput={(e) => setCpf(e.currentTarget.value)}
                onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleRegister()}
                type="text"
              />
            </div>
            <div className="jsi-register-form-group">
              <label htmlFor="">Endereço da Carteira Virtual</label>
              <Input
                value={walletAddress}
                onInput={(e) => setWalletAddress(e.currentTarget.value)}
                onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleRegister()}
                type="text"
              />
            </div>
            <div className="jsi-register-form-group">
              <label htmlFor="">Confirmar Senha</label>
              <Input
                value={confirmPassword}
                onInput={(e) => setConfirmPassword(e.currentTarget.value)}
                onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleRegister()}
                type="password"
              />
            </div>
          </div>
          {errorMessage && <p className="jsi-auth-form-error-message">{errorMessage}</p>}

          <div className="jsi-register-form-buttons">
            <Button onClick={handleRegister}>{isLoading ? 'Carregando...' : 'Cadastrar'}</Button>

            <Link to="/login">Voltar pro Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
