import { useContext } from "react";
import { FaEthereum } from "react-icons/fa6";
import { BsPatchExclamation } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { Rotates } from "../components";
import { TransactionContext } from "../Context/TransactionsContext";
const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    handleChange,
    formData,
    sendTransaction,
  } = useContext(TransactionContext);
  // console.log(connectWallet, "Data");
  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}.......${address.slice(-4)}`;
  };
  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message) return;
    sendTransaction();
  };
  return (
    <div className="w-full">
      <div className="layout flex items-start flex-col md:flex-row py-4 md:pt-20 md:pb-4 gap-12 md:gap-7">
        <div className="flex items-start justify-between flex-col md:flex-row w-full gap-8 md:gap-0 md:w-[55%]">
          <div className="w-[80%]">
            <h2 className="text-3xl md:text-5xl font-bold leading-[3rem] md:leading-[5rem]">
              Send Crypto Instantly, <br /> Securely, and Globally
            </h2>
            <p className="my-7 md:my-9 text-base  md:text-lg">
              Seamless Crypto transfers at your fingertips. Experience fast,
              secure, <br /> and low-cost transactions anytime, anywhere.
            </p>
            {!currentAccount && (
              <button
                className="bg-custom-gradient capitalize text-lg text-primary rounded-full px-5 py-2"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
            <div className="mt-10 md:mt-12 flex items-center gap-x-3 md:gap-x-5">
              <div className="uppercase text-sm md:text-base flex items-center gap-x-3">
                <span className="font-bold text-3xl md:text-4xl">2M+</span>
                <p className="font-semibold">active users</p>
              </div>
              <p className="text-3xl md:text-4xl">|</p>
              <div className="uppercase text-base flex items-center gap-x-3">
                <span className="font-bold text-3xl md:text-4xl">4.8</span>
                <p className="font-semibold">avg rating</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[20%] flex md:items-end md:justify-end ">
            <Rotates />
          </div>
        </div>
        <div className="w-full flex flex-col items-center   md:items-end md:justify-end  md:w-[45%] ">
          <div className="bg-custom-gradient w-[95%] md:w-[80%] mx-auto md:mx-0 py-2 md:py-4 rounded-lg">
            <div className="w-[90%] mx-auto ">
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white flex items-center justify-center size-8 md:size-10">
                  <FaEthereum className="size-[80%] " />
                </div>
                <BsPatchExclamation className="size-4 md:size-5" />
              </div>
              <div className="mt-4 md:mt-5">
                {currentAccount ? (
                  <p className="py-5 text-lg md:text-xl flex items-center gap-x-4">
                    {truncateAddress(`${currentAccount}`)}
                    <FaRegCopy className="cursor-pointer" />
                  </p>
                ) : (
                  <p className="py-5 text-lg md:text-xl">xxxxx....xxxx</p>
                )}
                <h4 className="capitalize font-semibold text-lg">ethereum</h4>
              </div>
            </div>
          </div>
          <div className="mt-4 w-[95%] md:w-[80%] py-2 md:py-4 bg-white rounded-lg ">
            <div className="w-[93%] mx-auto">
              <form className="w-full text-white" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Address to"
                  className="w-full h-8 md:h-11 text-sm md:text-base  bg-primary rounded-full px-4"
                  name="addressTo"
                  value={formData.addressTo}
                  onChange={(e) => handleChange(e, "addressTo")}
                />
                <input
                  type="text"
                  placeholder="Amount (ETH)"
                  className="w-full h-8 md:h-11 text-sm md:text-base  bg-primary my-3 rounded-full px-4"
                  name="amount"
                  value={formData.amount}
                  onChange={(e) => handleChange(e, "amount")}
                />
                {/* <input
                  type="text"
                  placeholder="Keyword"
                  className="w-full h-8 md:h-11 text-sm md:text-base  bg-primary mb-3 rounded-full px-4"
                  value={formData.keyword}
                  onChange={(e) => handleChange(e, "keyword")}
                /> */}
                <input
                  type="text"
                  placeholder="Enter Message"
                  className="w-full h-8 md:h-11 text-sm md:text-base  bg-primary mb-4 rounded-full px-4"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange(e, "message")}
                />
                <div className="w-full    flex items-center justify-center ">
                  <button
                    type="submit"
                    className="w-[60%] md:w-[55%] rounded-full py-[6px] text-sm md:text-base lg:text-xl  capitalize mx-auto lg:w-[45%] text-primary bg-custom-gradient"
                  >
                    send now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#1f232e]" />
    </div>
  );
};

export default Welcome;
