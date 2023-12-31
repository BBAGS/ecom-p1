import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { CSSProperties } from 'react';

interface Styles {
  padding: CSSProperties;
}

const styles: Styles = {
  padding: {
    /* define your styles here */
  },
};

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 max-w-full`}
      >
        {/* <span className='hash-span' id={idName}>
          &nbsp;
        </span> */}

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
