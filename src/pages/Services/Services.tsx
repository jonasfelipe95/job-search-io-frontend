import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import { IService } from 'domains/Service';
import { useStoreMap } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthStore from 'stores/auth/AuthStore';
import ServiceStore from 'stores/service/ServiceStore';
import getServicesUseCase from 'useCases/service/GetServicesUseCase';
import Service from './Service';
import './Services.scss';

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'MY'>('ALL');
  const [showServices, setShowServices] = useState<IService[]>([]);

  const navigate = useNavigate()

  const [services] = useStoreMap({
    store: ServiceStore,
    keys: [],
    fn: (state) => [state.services],
  });

  const [user] = useStoreMap({
    store: AuthStore,
    keys: [],
    fn: (state) => [state.user],
  });

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    handleFilterSevices();
  }, [filter, services]);

  const loadServices = async () => {
    setIsLoading(true);
    await getServicesUseCase();
    setIsLoading(false);
  };

  const handleFilterSevices = () => {
    console.log({ filter, services, showServices });
    if (filter === 'ALL') {
      setShowServices(services);
    } else {
      setShowServices(services.filter((service) => service.user === user?._id));
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="jsi-services-page">
        <h1>Serviços</h1>

        <div className="jsi-services-page-navigation-buttons">
          <Button
            style={{ color: '#FFFFFF', background: '#66C0BC' }}
            className={filter === 'ALL' ? 'jsi-active-button' : ''}
            onClick={() => setFilter('ALL')}
          >
            Todos os Serviços
          </Button>
          <Button
            style={{ color: '#FFFFFF', background: '#66C0BC' }}
            className={filter === 'MY' ? 'jsi-active-button' : ''}
            onClick={() => setFilter('MY')}
          >
            Meus Serviços
          </Button>
          <Button onClick={()=> navigate("/services/new")} width="240px" style={{ color: '#FFFFFF', background: '#00968F' }}>
            Cadastrar Novo Serviço
          </Button>
        </div>

        {showServices?.length ? (
          <ul className="jsi-services-page-services-list">
            {showServices.map((service: any, index: number) => (
              <Service key={`setvice-${index}`} service={service} />
            ))}
          </ul>
        ) : (
          <p className="jsi-no-services-message">
            {isLoading ? 'Carregando...' : 'Nenhum serviço disponível no momento!'}
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;
