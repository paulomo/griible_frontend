import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactContent: React.FC = () => {
 
  
  return (
    <React.Fragment>
      <div className="">
        <div className="p-1 rounded-sm" onClick={() => console.log("was clicked")}>
          <ContactCard />
        </div>
        <h3 className="p-1 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-1 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-1 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-1 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-1 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-1 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
        <h3 className="p-2 rounded-sm">
          <ContactCard />
        </h3>
      </div>
    </React.Fragment>
  );
};
