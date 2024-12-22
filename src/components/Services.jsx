import { Send } from "../assets";
import { FaGlobe } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import Rotates from "./Rotates";
const Services = () => {
  const Data = [
    {
      id: 1,
      icon: <IoSpeedometer className="size-[70%]" />,
      title: "Lightning-Fast Transfers",
      description:
        "Send Ethereum in seconds. No delays, no waiting—just instant, hassle-free transactions, even during peak hours.",
    },
    {
      id: 2,
      icon: <BsShieldFillCheck className="size-[70%]" />,
      title: "Top-Tier Security",
      description:
        "Your funds are protected with the highest level of encryption. Every transaction is safeguarded against unauthorized access, ensuring your peace of mind.",
    },
    {
      id: 3,
      icon: <FaGlobe className="size-[70%]" />,
      title: "Borderless Transactions",
      description:
        "Send Ethereum to anyone, anywhere in the world. No international transfer fees, and no banking restrictions",
    },
  ];
  return (
    <div className="w-full mt-[6rem]">
      <div className="layout flex items-start gap-14 md:gap-10 justify-between flex-col md:flex-row ">
        <div className="w-full flex items-start justify-between gap-7 md:gap-0 flex-col-reverse md:flex-row">
          <div className="w-full md:w-[75%] lg:w-[80%]">
            <img src={Send} alt="" className="w-[95%]" />
          </div>
          <div className="w-full md:w-[25%] lg:w-[20%] flex items-end justify-center md:justify-end">
            <Rotates />
          </div>
        </div>
        <div className="w-full  flex items-center flex-col justify-center md:items-end  md:justify-end ">
          {Data.map((item) => (
            <div
              className="w-[98%] md:w-[85%]  bg-black shadow rounded-lg py-4 mb-3"
              key={item.id}
            >
              <div className="w-[95%] md:w-[90%] mx-auto flex items-start gap-x-4 md:gap-x-3 lg:gap-x-2">
                <div className="w-[15%]">
                  <div className="bg-custom-gradient size-9 md:size-10 lg:size-12 rounded-full flex flex-col items-center justify-center text-black">
                    {item.icon}
                  </div>
                </div>
                <div className="w-[85%]">
                  <h3 className="text-gradient text-lg md:text-xl lg:text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="py-3 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
