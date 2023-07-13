"use client";
import { motion } from "framer-motion";

const GreetingsMessage = () => {
  const spring = {
    type: "spring",
    duration: 3,
    delay: 2,
  };
  return (
    <div className="flex absolute gap-7 flex-col items-center justify-center top-1/3 mx-auto text-[#89998A]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        className="text-start text-8xl"
      >
        Salutari{" "}
      </motion.h1>
      <motion.h2
        initial={{ scale: 0, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        transition={spring}
        className="text-start text-5xl"
      >
        Welcome to your project manager !
      </motion.h2>
    </div>
  );
};

export default GreetingsMessage;
