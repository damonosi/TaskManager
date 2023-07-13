"use client";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import { fetcher as myFetcher } from "./myFetcher";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SWRConfig value={{ fetcher: myFetcher }}>
      <SessionProvider>
        <ToastContainer
          theme="light"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {mounted ? (
          <ThemeProvider attribute="class">{children} </ThemeProvider>
        ) : (
          <>{children}</>
        )}
      </SessionProvider>
    </SWRConfig>
  );
};

export default Providers;
