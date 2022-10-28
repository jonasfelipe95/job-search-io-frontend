import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import { useStoreMap } from 'effector-react';
import React from 'react';
import AuthStore from 'stores/auth/AuthStore';
import './MyProfile.scss';

const MyProfile = () => {
  const [user] = useStoreMap({
    store: AuthStore,
    keys: [],
    fn: (state) => [state.user],
  });

  return (
    <React.Fragment>
      <Header />
      <div className="jsi-profile-page">
        <h1>Meu Perfil</h1>
        <p>Nome: {user?.name}</p>
        <p>E-mail: {user?.email}</p>
        <p>CPF: {user?.cpf}</p>
        <p>Endereço da Carteira: {user?.walletAddress}</p>

        <Button
          style={{ color: '#FFFFFF' }}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Sair
        </Button>
      </div>
    </React.Fragment>
  );
};

export default MyProfile;
