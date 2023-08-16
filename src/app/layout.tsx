import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discribe",
  description: "The Discord voice transcription bot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-[1200px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
