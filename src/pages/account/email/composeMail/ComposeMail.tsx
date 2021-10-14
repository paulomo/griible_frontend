import React from "react";

export const ComposeMail: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full px-2">
        <div className="py-2">
          <input
            placeholder="Email Subject"
            className="w-full rounded border border-gray-400"
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Email Body"
            className="w-full rounded border border-gray-400"
          />
        </div>
        <div>Option Buttons</div>
      </div>
    </React.Fragment>
  );
};
