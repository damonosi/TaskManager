"use client";
import { motion } from "framer-motion";
const ArrowsDown = () => {
  return (
    <button className=" stroke-red-600 flex w-fit h-fit stroke-[2px] p-1 hover:scale-105 ">
      <svg
        height="80px"
        width="80px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 330 330"
        className="overflow-visible"
      >
        <motion.g id="XMLID_88_">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,

              repeatDelay: 2,
            }}
            fill="#fff"
            id="XMLID_89_"
            d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001
		c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
		c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,

              repeatDelay: 2,
            }}
            fill="#fff"
            id="XMLID_90_"
            d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
		c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393
		c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"
          />
        </motion.g>
      </svg>
    </button>
  );
};

export default ArrowsDown;
