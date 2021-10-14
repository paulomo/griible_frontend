import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { AccountServiceAPI } from "../../../networking/account/AccountService";

export const ConnectAccount = () => {
  const [googleWindow, setGoogleWindow] = useState<any>(null);
  const [isGoogleWindowOpen, setIsGoogleWindowOpen] = useState<boolean>(false);
  const accountService = new AccountServiceAPI();
  const {
    data: apiEmailData,
    isError,
    error,
    isLoading,
  } = useQuery("chackingUserEmailAccount", accountService.getUserGmailAccount);

  const goToNextScreen = () => {
    
  };

  const mutation = useMutation(accountService.accountGmailAccount, {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  const handleGoogleAuth = () => {
    mutation.mutateAsync();
  };

  const openGoogle = (url: string) => {
    window.open(url, "com_griible_googleAPiWindow", "height=960px,width=940px");
    setGoogleWindow(
      window.open(
        url,
        "com_griible_googleAPiWindow",
        "height=960px,width=940px"
      )
    );

    setIsGoogleWindowOpen(true);
    // if(googleWindow) window.googleWindow.close()
  };

  useEffect(() => {
    if (!googleWindow) {
      goToNextScreen()
    }
    return () => {};
  }, [googleWindow]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg"></div>
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <p className="mb-5 text-base text-textSecondaryColor md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        <div className="flex items-center md:justify-center">
          <button
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide 
          text-textSecondaryColor transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
          hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Connect Yahoo Account
          </button>
          <button
            onClick={() => handleGoogleAuth()}
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide 
          text-textSecondaryColor transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
          hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Connect Gmail Account
          </button>
          {mutation.data && openGoogle(mutation.data)}
        </div>
      </div>
    </div>
  );
};
