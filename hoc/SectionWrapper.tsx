import { motion } from "framer-motion";
import { FC } from "react";

import { styles } from "./styles";
import { staggerContainer } from "../utils/motion";

interface StarWrapperProps {
  idName: string;
}

const StarWrapper = (Component: FC, idName: string): FC<StarWrapperProps> => {
  const HOC: FC<StarWrapperProps> = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

  return HOC;
};

export default StarWrapper;
