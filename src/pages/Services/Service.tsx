import Button from 'components/Button/Button';
import { IService } from 'domains/Service';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.scss';

interface IServiceComponent {
  service: IService;
}

const Service = ({ service }: IServiceComponent) => {
  const navigate = useNavigate();

  return (
    <li className="jsi-service">
      <h3>{service?.title}</h3>
      <p>{service?.description}</p>
      <div>
        <span>{service?.value} <span>{' '}ETH</span></span>
        <Button onClick={() => navigate(`/services/${service?._id}`)} style={{ color: '#FFFF' }}>
          Ver Detalhes
        </Button>
      </div>
    </li>
  );
};

export default Service;
