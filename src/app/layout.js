import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/Layout";
import Header from "@/components/Header";
import config from "../../config";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: `${config.name} | Developer`,
  description: "A talented and ambitious self-taught web developer with expertise in JavaScript and C#.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-gray-300">
      <body className={montserrat.className}>
        <LayoutWrapper>
          <div className="max-w-7xl mx-auto px-4">
            <Header />
            <main>{children}</main>
          </div>
        </LayoutWrapper>
      </body>
    </html>
  );
}