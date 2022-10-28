import getContract, { web3 } from './GetContract.service';

export const deposit = async (walletAddressToTransaction: string, value: number): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);

  const response = await contract.methods.deposit().send({
    from: walletAddressToTransaction,
    value: web3.utils.toWei(value.toString(), 'ether'),
  });

  return response;
};

export default deposit;
