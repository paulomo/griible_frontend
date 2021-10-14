import React from "react";
import {
  MdMail,
  MdDrafts,
  MdModeEdit,
  MdNotifications,
  MdDelete,
  MdAttachFile,
} from "react-icons/md";

export const TopBar: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center text-white h-full pt-20 pb-4 px-1">
        <div className="flex-grow">
          <div className="">
            <MdMail className="w-8 h-8" />
          </div>
          <div className="">
            <MdDrafts className="w-8 h-8" />
          </div>
          <div className="">Junk</div>
          <div className="">
            <MdDelete className="w-8 h-8" />
          </div>
        </div>
        <div className="flex-none">
          <div className="">
            <MdNotifications className="w-8 h-8" />
          </div>
          <div className="">Profile</div>
        </div>
      </div>
    </React.Fragment>
  );
};
