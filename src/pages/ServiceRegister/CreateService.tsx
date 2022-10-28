import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import Textarea from 'components/Textarea/Textarea';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createServiceUseCase from 'useCases/service/CreateServiceUseCase';
import Input from '../../components/Input/Input';
import './CreateService.scss';

const CreateService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleCreateService = async () => {
    setIsLoading(true);

    const registered = await createServiceUseCase({
      title,
      description,
      value: parseFloat(value as string),
    });

    if (registered) {
      setTimeout(() => {
        setTitle('');
        setDescription('');
        setValue('');
        setIsLoading(false);
        navigate('/services');
      }, 300);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <div className="jsi-new-service-page">
        {isLoading ? (
          <p className="jsi-new-service-loading-message">Carregando...</p>
        ) : (
          <React.Fragment>
            <h1>Cadastrar Novo Serviço</h1>

            <form>
              <div className="jsi-new-service-form-group">
                <label htmlFor="">Título</label>
                <Input
                  value={title}
                  onChange={() => {}}
                  onInput={(e) => setTitle(e.currentTarget.value)}
                  onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleCreateService()}
                  type="text"
                />
              </div>
              <div className="jsi-new-service-form-group">
                <label htmlFor="">Descrição</label>
                <Textarea
                  value={description}
                  onChange={() => {}}
                  onInput={(e) => setDescription(e.currentTarget.value)}
                  onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleCreateService()}
                  type="text"
                />
              </div>
              <div className="jsi-new-service-form-group">
                <label htmlFor="">value</label>
                <Input
                  onChange={() => {}}
                  value={value}
                  onInput={(e) => setValue(e?.currentTarget?.value)}
                  onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && handleCreateService()}
                  type="number"
                />
              </div>

              <div className="jsi-new-service-form-buttons">
                <Button style={{ color: '#FFFFFF' }} onClick={handleCreateService}>
                  {isLoading ? 'Carregando...' : 'Cadastrar'}
                </Button>

                <Button style={{ color: '#FFFFFF' }} onClick={() => navigate('/services')}>
                  Voltar
                </Button>
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default CreateService;
