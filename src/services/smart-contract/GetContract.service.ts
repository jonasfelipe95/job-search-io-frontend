import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import contractAbi from './contract-abi.json';

const getWeb3 = () =>
  new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_SERVER_URL as string));

export const getContract = async (walletAddressToTransaction: string): Promise<Contract> => {
  const web3 = getWeb3();
  await window.ethereum.enable();

  web3.eth.defaultAccount = walletAddressToTransaction;

  return new web3.eth.Contract(contractAbi as AbiItem[], process.env.REACT_APP_CONTRACT_ADDRESS);
};

export const web3 = getWeb3();
export default getContract;
