import axios from "axios";
import { baseURLLocal } from "../config/BaseURL";

export interface IAccountAPI {
  accountGmailAccount(): Promise<any>;
}

export class AccountServiceAPI implements IAccountAPI {
  async accountGmailAccount(): Promise<any> {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURLLocal}/gmailAuth2`,
      });

      return response.data;
    } catch (e: any) {
      console.error("Error adding document: ", e);
      return e;
    }
  }

  async getUserGmailAccount(): Promise<any> {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURLLocal}/gmailAuth2`,
      });

      return response.data;
    } catch (e: any) {
      console.error("Error adding document: ", e);
      return e;
    }
  }
}
