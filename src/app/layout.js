import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next hero",
    template: "%s | Next hero"
  },
  description: "Super Powerful next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="">{children}</div>
        <footer className="bg-blue-400 text-center ">this is my footer</footer>
        </body>
    </html>
  );
}
