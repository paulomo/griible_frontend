import React from "react";

export const ContactCard: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex border-2 p-1 w-full bg-red-600 rounded">
        <div className="w-1/5">
          <img src="" className="w-full" />
        </div>
        <div className="flex-grow pl-2 bg-red-300">
          <div className="flex text-sm justify-end">
            block favourite deleteAll
          </div>
          <div className="flex w-full">
            <h3 className="flex-grow text-base">Name</h3>
          </div>
          <div className="flex text-sm">
            <p>total count</p>
            <p>unread count</p>
            <p>today count</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
