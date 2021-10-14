import React from "react";
import { motion } from "framer-motion";
import { AnalyticalContent } from "./analyticalContent/AnalyticalContent";
import { ContactContent } from "./contactContent/ContactContent";
import { MainContent } from "./mainContent/MainContent";
import { TopBar } from "./topBar/TopBar";

export const Email: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="h-screen bg-primaryBackground pt-2">
        <div className="flex flex-grow h-full rounded-sm">
          <div className="flex flex-col items-center">
            <TopBar />
          </div>
          <div className="w-1/5 mr-2 bg-white rounded overflow-auto">
            <ContactContent />
          </div>
          <div className="flex-grow bg-white mr-2 overflow-auto">
            <MainContent />
          </div>
          <div className="w-1/4 bg-white lg:pr-6">
            <AnalyticalContent />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
