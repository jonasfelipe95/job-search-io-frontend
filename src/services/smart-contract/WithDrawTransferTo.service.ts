import getContract, { web3 } from './GetContract.service';

export const withDrawTransferTo = async (
  walletAddressToTransaction: string,
  walletAddressToReceiveValue: string,
  value: number
): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);

  const response = await contract.methods
    .withDrawTransferTo(
      walletAddressToReceiveValue,
      web3.utils.toWei(web3.utils.toBN(value), 'ether')
    )
    .call();

  return response;
};

export default withDrawTransferTo;
