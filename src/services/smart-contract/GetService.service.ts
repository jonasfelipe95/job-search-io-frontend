import getContract from './GetContract.service';

export const getService = async (
  walletAddressToTransaction: string,
  serviceId: string
): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);
  console.log({serviceId, contract})


  const response = await contract.methods.getService(serviceId).call();
  
  return response;
};

export default getService;
