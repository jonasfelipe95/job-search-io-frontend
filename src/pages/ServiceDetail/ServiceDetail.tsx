import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import { ICandidate, ServiceStatus } from 'domains/Service';
import { useStoreMap } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import deposit from 'services/smart-contract/Deposit.service';
import { web3 } from 'services/smart-contract/GetContract.service';
import getMyBalance from 'services/smart-contract/GetMyBalance.service';
import AuthStore from 'stores/auth/AuthStore';
import ServiceStore from 'stores/service/ServiceStore';
import applyForServiceUseCase from 'useCases/service/ApplyForServiceUseCase';
import getServiceByIdUseCase from 'useCases/service/GetServiceByIdUseCase';
import ownerFinishedUseCase from 'useCases/service/OwnerFinishedUseCase';
import setWorkerApprovaleUseCase from 'useCases/service/SetWorkerApprovalUseCase';
import startServiceUseCase from 'useCases/service/StartServiceUseCase';
import setWorkerFinished from 'useCases/service/WorkerFinishedUseCase';
import clientFinishedUseCase from 'useCases/smart-contract/ClientFinishedUseCase';
import createServiceUseCase from 'useCases/smart-contract/CreateServiceUseCase';
import getServiceUseCase from 'useCases/smart-contract/GetServiceUseCase';
import workerFinishedUseCase from 'useCases/smart-contract/WorkerFinishedUseCase';
import './ServiceDetail.scss';

const getStatusText = (status: string) =>
  ({ APPROVED: 'Aprovado', REFUSED: 'Rejeitado', CANDIDATE: 'Candidato' }[status]);

const getStatusByService = (status: number | string) => {
  const serviceStatus = {
    [ServiceStatus[0]]: 'Iniciado',
    [ServiceStatus[1]]: 'Cancelado',
    [ServiceStatus[2]]: 'Finalizado',
    [ServiceStatus[3]]: 'Finalizado e Pago',
  }[status];
  return serviceStatus ? ` - ${serviceStatus}` : '';
};

const ServiceDetail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const [service] = useStoreMap({
    store: ServiceStore,
    keys: [],
    fn: (state) => [state.service],
  });

  const [user] = useStoreMap({
    store: AuthStore,
    keys: [],
    fn: (state) => [state.user],
  });

  useEffect(() => {
    getService();
  }, []);

  const getService = async () => {
    setIsLoading(true);

    const response = await getServiceByIdUseCase(id as string);

    console.log({
      user,
      service,
      response,
    });
    const serviceByContract = await getServiceUseCase(
      user?.walletAddress as string,
      response.data.service?._id as string
    );

    console.log({
      serviceByContract,
    });

    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="jsi-service-page">
        {isLoading ? (
          <p className="jsi-service-loading-message">Carregando...</p>
        ) : (
          <React.Fragment>
            <h1>
              {service?.title} {getStatusByService(service?.status as string)}
            </h1>

            <div className="jsi-service-action-buttons">
              {service?.user !== user?._id &&
                !service?.candidates?.find((_candidate) => _candidate._id === user?._id) && (
                  <Button
                    width="240px"
                    style={{ color: '#FFFFFF', background: '#66C0BC' }}
                    onClick={async () => {
                      if (service?.user !== user?._id) {
                        const success = await applyForServiceUseCase(service?._id as string);

                        if (success) window.location.reload();
                      }
                    }}
                  >
                    Me candidatar ao serviço
                  </Button>
                )}

              {service?.user === user?._id ? (
                <>
                  <Button
                    style={{ color: '#FFFFFF', background: '#198754' }}
                    onClick={async () => {
                      const value = prompt('Valor em ether:');
                      if (value && service?.user === user?._id) {
                        await deposit(
                          user?.walletAddress as string,
                          parseFloat(value.replace(',', '.'))
                        );
                      }
                    }}
                  >
                    Depositar Valor
                  </Button>
                  <Button
                    width="160px"
                    style={{ color: '#FFFFFF', background: '#198754' }}
                    onClick={async () => {
                      if (service?.user === user?._id) {
                        const balance = await getMyBalance(user?.walletAddress as string);

                        alert(
                          'Seu Saldo é de ' + web3.utils.fromWei(balance, 'ether') + ' ether(s)'
                        );
                      }
                    }}
                  >
                    Meu Saldo
                  </Button>
                </>
              ) : (
                ''
              )}

              {(service?.user === user?._id ||
                service?.candidates?.find((candidate) => candidate.status === 'APPROVED')?._id ===
                  user?._id) &&
              service?.status === ServiceStatus[0] ? (
                <Button
                  width="280px"
                  style={{ color: '#FFFFFF', background: '#198754' }}
                  onClick={async () => {
                    if (service?.user === user?._id) {
                      const value = prompt(
                        'Qual a sua avaliação para a entrega do serviço? (1 a 5)'
                      );
                      if (value) {
                        const response = await clientFinishedUseCase(
                          user?.walletAddress as string,
                          service._id as string,
                          parseInt(value)
                        );

                        if (response) {
                          await ownerFinishedUseCase(service._id as string, parseInt(value));
                          window.location.reload();
                        }
                      }
                    } else {
                      const response = await workerFinishedUseCase(
                        user?.walletAddress as string,
                        service._id as string
                      );
                      if (response) {
                        await setWorkerFinished(service._id as string);
                        window.location.reload();
                      }
                    }
                  }}
                >
                  Confirmar entrega do serviço
                </Button>
              ) : (
                ''
              )}

              {service?.user === user?._id &&
              !service?.status &&
              service?.status !== ServiceStatus[0] &&
              service?.candidates?.find((_candidate) => _candidate.status === 'APPROVED') ? (
                <Button
                  width="280px"
                  style={{ color: '#FFFFFF', background: '#198754' }}
                  onClick={async () => {
                    if (service?.user === user?._id) {
                      const response = await createServiceUseCase(service);

                      console.log({ response });

                      if (response) {
                        await startServiceUseCase(service._id as string);
                        window.location.reload();
                      }
                    }
                  }}
                >
                  Começar execução do serviço
                </Button>
              ) : (
                ''
              )}

              <Button
                onClick={() => navigate('/services')}
                width="240px"
                style={{ color: '#FFFFFF', background: '#00968F' }}
              >
                Voltar à lista de serviços
              </Button>
            </div>

            <p className="jsi-service-description">{service?.description}</p>
            <p className="jsi-service-value">
              {service?.value} <span>ETH</span>
            </p>

            {service?.user === user?._id && service?.candidates?.length ? (
              <ul className="jsi-service-candidates">
                {service?.candidates?.map((candidate: ICandidate, index: number) => {
                  return (
                    <li key={`service-candidate-${index}`} className="jsi-service-candidate">
                      {candidate.name}{' '}
                      {candidate?.status ? ` - ${getStatusText(candidate?.status)}` : ''}
                      {candidate.status === 'CANDIDATE' &&
                        !service?.candidates?.find(
                          (_candidate) => _candidate.status === 'APPROVED'
                        ) && (
                          <div className="jsi-service-candidate">
                            <Button
                              style={{ color: '#FFFFFF', background: '#198754' }}
                              onClick={async () => {
                                if (service?.user === user?._id) {
                                  const success = await setWorkerApprovaleUseCase(
                                    service._id as string,
                                    {
                                      answer: 'APPROVED',
                                      workerId: candidate?._id as string,
                                    }
                                  );

                                  if (success) window.location.reload();
                                  window.location.reload();
                                }
                              }}
                            >
                              Aprovar Candidato
                            </Button>
                            <Button
                              style={{ color: '#FFFFFF', background: '#dc3545' }}
                              onClick={async () => {
                                if (service?.user === user?._id) {
                                  const success = await setWorkerApprovaleUseCase(
                                    service?._id as string,
                                    {
                                      answer: 'REFUSED',
                                      workerId: candidate?._id as string,
                                    }
                                  );

                                  if (success) window.location.reload();
                                  window.location.reload();
                                }
                              }}
                            >
                              Rejeitar Candidato
                            </Button>
                          </div>
                        )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ''
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default ServiceDetail;
