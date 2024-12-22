import { useState, useEffect } from "react";
import { Rotate } from "../assets";

const Rotates = () => {
  const [rotateDirection, setRotateDirection] = useState("clockwise");

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDirection("anticlockwise");
      setTimeout(() => {
        setRotateDirection("clockwise");
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fan-container">
      <img
        src={Rotate}
        alt="Rotating Fan"
        className={`fan ${rotateDirection} size-20 lg:size-24`}
      />
    </div>
  );
};

export default Rotates;
