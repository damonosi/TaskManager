import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Providers from "@/utils/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task manager",
  description: "Manage your tasks with the team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  dark:bg-gradient-radial dark:text-white `}
      >
        <Providers>
          <Header />

          <main className="pt-14">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
