import React from "react";
import { Feature, Footer, Nav, Pricing, Step, Top } from "./component";
import { motion } from "framer-motion";


export const WelcomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Nav />
      </div>

      <div>
        <Top />
      </div>

      <div>
        <Feature />
      </div>

      <div>
        <Step />
      </div>

      <div>
        <Pricing />
      </div>

      <div>
        <Footer />
      </div>
    </motion.div>
  );
};
