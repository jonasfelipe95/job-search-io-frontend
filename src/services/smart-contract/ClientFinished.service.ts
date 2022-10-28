import getContract, { web3 } from './GetContract.service';

export const clientFinished = async (
  walletAddressToTransaction: string,
  serviceId: string,
  evaluation: number
): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);

  try {
    const getData = await contract.methods.clientFinished(serviceId, evaluation);

    const response = await web3.eth.sendTransaction({
      to: process.env.REACT_APP_CONTRACT_ADDRESS,
      from: walletAddressToTransaction,
      data: web3.eth.abi.encodeFunctionCall(getData._method, getData.arguments),
      gas: 3000000,
    });

    return response;
  } catch (error) {
    console.error({ error });
  }
};

export default clientFinished;
