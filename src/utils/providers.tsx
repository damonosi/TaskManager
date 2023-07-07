"use client";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import { fetcher as myFetcher } from "./myFetcher";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
  return (
    <SWRConfig value={{ fetcher: myFetcher }}>
      <ToastContainer />

      <SessionProvider>{children}</SessionProvider>
    </SWRConfig>
  );
};

export default Providers;
