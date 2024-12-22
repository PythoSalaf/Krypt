import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
const Footer = () => {
  const icons = [
    { id: 1, icon: <FaXTwitter className="size-[50%] md:size-[60%]" /> },
    {
      id: 2,
      icon: <AiFillInstagram className="size-[50%] md:size-[60%]" />,
    },
    {
      id: 3,
      icon: <FaFacebookF className="size-[50%] md:size-[60%]" />,
    },
    {
      id: 4,
      icon: <BsDiscord className="size-[50%] md:size-[60%]" />,
    },
  ];
  return (
    <div className="w-full mt-9 bg-black py-4">
      <div className="layout flex items-center gap-y-6 md:gap-y-0 justify-between flex-col md:flex-row">
        <p className="text-base md:text-lg">
          Copyright &copy; 2024 Krypt. All right reserved
        </p>
        <div className="flex items-center gap-x-8 md:gap-x-5">
          {icons.map((item, index) => (
            <div
              className="size-8 md:size-10 rounded-full bg-custom-gradient cursor-pointer flex items-center justify-center text-black"
              key={index}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
