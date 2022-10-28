import { IService } from 'domains/Service';
import getContract, { web3 } from './GetContract.service';

export const createService = async (service: IService): Promise<any> => {
  const contract = await getContract(process.env.REACT_APP_CONTRACT_ADMIN as string);

  console.log({
    contract,
    serviceId: service._id,
    owner: service.owner,
    value: web3.utils.toWei(service.value.toString(), 'ether'),
    worker: service.worker,
  });
  try {
    const getData = await contract.methods.createService(
      service._id,
      service.owner,
      web3?.utils?.toWei(service.value.toString(), 'ether'),
      service.worker
    );


    const response = await web3.eth.sendTransaction({
      to: process.env.REACT_APP_CONTRACT_ADDRESS,
      from: process.env.REACT_APP_CONTRACT_ADMIN,
      data: web3.eth.abi.encodeFunctionCall(getData._method, getData.arguments),
      gas:3000000
    });
    console.log({ response });

    return response;
  } catch (error) {
    console.error({ error });
    return false;
  }
};

export default createService;
