import React from "react";
import { ComposeMail } from "../composeMail/ComposeMail";
import { MainContentcard } from "./MainContentCard";

export const MainContent: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col flex-grow w-full h-full">
        <div className="h-full">
          <MainContentcard />
        </div>
        <div className="w-full bg-gray-600">
          <div className="flex flex-row-reverse w-full">
            <button className="text-black">New Email</button>
          </div>
          <ComposeMail />
        </div>
      </div>
    </React.Fragment>
  );
};
