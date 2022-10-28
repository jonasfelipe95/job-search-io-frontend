import getContract from "./GetContract.service";

export const getBalanceOf = async (
  walletAddressToTransaction: string,
  walletAddressToGetBalance: string
): Promise<any> => {
  const contract = await getContract(walletAddressToTransaction);

  const response = await contract.methods.balanceOf(walletAddressToGetBalance).call();

  return response;
};

export default getBalanceOf;
