import { TypeAnimation } from "react-type-animation";

const TypeAnimate = ({ textList }) => {
  return (
    <TypeAnimation
      sequence={[...textList.map((text) => [text, 2000])]}
      speed={50} // Typing speed
      repeat={Infinity} // Loop infinitely
      cursor={true} // Display the cursor
      className="" // Custom class for Tailwind styles
    />
  );
};

export default TypeAnimate;
