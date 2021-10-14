import React from "react";
import {
  MdDelete,
  MdGetApp,
  MdMarkunread,
  MdReply,
  MdReplyAll,
  MdSend,
  MdForward,
} from "react-icons/md";

export const MainContentcard: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bg-red-300 w-full border-2 p-2">
        <div className="flex bg-yellow-300">
          <div className="bg-yellow-600">Received Date</div>
          <div className="flex justify-end flex-grow ">
            <MdReply />
            <MdReplyAll />
            <MdForward />
            <MdDelete />
          </div>
        </div>
        <div className="py-2">
          <p>Body of Email</p>
        </div>
      </div>
    </React.Fragment>
  );
};
