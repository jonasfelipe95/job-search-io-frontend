import getContract, { web3 } from './GetContract.service';

export const workerFinished = async (
  walletAddressToTransaction: string,
  serviceId: string
): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);

  try {
    console.log({
      serviceId,
      walletAddressToTransaction
    })
    const getData = await contract.methods.workerFinished(serviceId);
    console.log({
      getData,
      to: process.env.REACT_APP_CONTRACT_ADDRESS,
      from: walletAddressToTransaction,
      data: web3.eth.abi.encodeFunctionCall(getData._method, getData.arguments),
      gas: 3000000,
    })
    const response = await web3.eth.sendTransaction({
      to: process.env.REACT_APP_CONTRACT_ADDRESS,
      from: walletAddressToTransaction,
      data: web3.eth.abi.encodeFunctionCall(getData._method, getData.arguments),
      gas: 3000000,
    });

    console.log({
      response
    })

    return response;
  } catch (error) {
    console.error({ error });
    console.dir({error: JSON.stringify(error)})
    return false;
  }
};

export default workerFinished;
