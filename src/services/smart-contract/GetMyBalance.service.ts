import getContract from './GetContract.service';

export const getMyBalance = async (walletAddressToTransaction: string): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);

  const response = await contract.methods.myBalance().call();

  return response;
};

export default getMyBalance;
