import { Inter } from "next/font/google";
import Link from "next/link"; // Import Link from next/link
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CBA Chatbot",
  description: "A quickstart template using the Assistants API with OpenAI",
  icons: {
    icon: "/soccer-ball.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <Link href="/" passHref>
          <img className="logo" src="/soccer-ball.svg" alt="OpenAI Logo" />
        </Link>
      </body>
    </html>
  );
}
