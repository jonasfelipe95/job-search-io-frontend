import { useStoreMap } from 'effector-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthStore from 'stores/auth/AuthStore';
import getMeUseCase from 'useCases/user/GetMeUseCase';
import logo from '../../assets/images/logo-horizontal.png';
import simpleBlackLogo from '../../assets/images/simple-black-logo.png';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();

  const [user] = useStoreMap({
    store: AuthStore,
    keys: [],
    fn: (state) => [state.user],
  });

  useEffect(() => {
    if (!user) {
      getMeUseCase();
    }
  }, [user]);

  return (
    <header className="jsi-header">
      <img className="jsi-header-logo" src={logo} alt="" />
      <div className="jsi-header-avatar" title="Abrir Perfil" onClick={()=> navigate("/my-profile")}>
        <img src={simpleBlackLogo} alt="" />
      </div>
    </header>
  );
};

export default Header;
