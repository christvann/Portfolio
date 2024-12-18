import { motion } from "framer-motion";

import { styles } from "../styles";
import { CoinsCanvas } from "./canvas";

const Wave = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF0000]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#FF0000] to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.waveHeadText} text-white`}>
            Halo, Im <span className="text-[#FF0000]">Ivan Christian</span>
          </h1>
          <p className={`${styles.waveSubText} mt-2 text-white-100`}>I develop user interface and web applications</p>
        </div>
      </div>

      <CoinsCanvas />

      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Wave;
