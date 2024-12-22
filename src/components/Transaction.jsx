import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionsContext";
import { transactData } from "./DummyData";

const Transaction = () => {
  const { currentAccount } = useContext(TransactionContext);
  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}.......${address.slice(-4)}`;
  };
  return (
    <div className="mt-[4rem] md:mt-24 mb-6">
      <div className="layout">
        {currentAccount ? (
          <div className="">
            <h2 className="text-center text-gradient text-2xl md:text-3xl lg:text-4xl">
              Latest Transaction
            </h2>
            <p className="text-center mt-3 text-base md:text-xl font-semibold">
              Click on the wallet address to check the wallet information
            </p>
          </div>
        ) : (
          <div className="">
            <h2 className="text-center capitalize text-gradient text-2xl md:text-3xl lg:text-4xl">
              Connect Wallet to see latest transaction
            </h2>
          </div>
        )}
        <div className="w-full mt-7 md:mt-14 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-black ">
              <tr>
                <th className="text-gradient py-1 md:py-2 text-sm md:text-xl">
                  S/N
                </th>
                <th className="text-gradient py-1 md:py-2 text-sm md:text-xl">
                  From
                </th>
                <th className="text-gradient py-1 md:py-2 text-sm md:text-xl">
                  To
                </th>
                <th className="text-gradient py-1 md:py-2 text-sm md:text-xl">
                  Amount
                </th>
                <th className="text-gradient py-1 md:py-2 text-sm md:text-xl">
                  Message
                </th>
                <th className="text-gradient py-1 md:py-2 text-sm md:text-xl">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {transactData.reverse().map((item, index) => (
                <tr className="border-b" key={item.sn}>
                  <td className="text-center border text-base border-lightColor">
                    {index + 1}
                  </td>
                  <td className="p-4 text-sm md:text-base text-center border border-lightColor ">
                    <a
                      href={`https://sepolia.etherscan.io/tx/${item.from}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {truncateAddress(`${item.from}`)}
                    </a>
                  </td>
                  <td className="p-4 text-sm md:text-base text-center border border-lightColor ">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      {truncateAddress(`${item.to}`)}
                    </a>
                  </td>
                  <td className="p-4 text-center text-sm md:text-base border border-lightColor ">
                    {item.amount} ETH
                  </td>
                  <td className="p-4 text-center border text-sm md:text-base border-lightColor ">
                    {item.message}
                  </td>
                  <td className="p-4 text-center text-sm md:text-base border border-lightColor ">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
