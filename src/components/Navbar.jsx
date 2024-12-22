import { useContext, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { TransactionContext } from "../Context/TransactionsContext";

const Navbar = () => {
  const { currentAccount } = useContext(TransactionContext);
  const [toggle, setToggle] = useState(false);
  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.slice(-4)}`;
  };
  return (
    <div className="w-full h-16 flex items-center bg-primary">
      <div className="layout flex items-center justify-between">
        <h2 className="uppercase  text-2xl sm:text-3xl lg:text-4xl">krypt</h2>
        <div className="hidden md:flex items-center md:gap-x-8 lg:gap-x-12">
          {["market", "exchange", "Tutorial", "wallets"].map((item, index) => (
            <a href="#" className="text-lg capitalize" key={index}>
              {item}
            </a>
          ))}
          <button className="bg-custom-gradient text-primary rounded-full px-4 py-2">
            {currentAccount
              ? truncateAddress(`${currentAccount}`)
              : " Connect Wallet"}
          </button>
        </div>
        <div className="block md:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <IoMdClose className="size-8" />
          ) : (
            <IoMenuOutline className="size-8" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
