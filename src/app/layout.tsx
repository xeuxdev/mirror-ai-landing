import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const latom = localFont({
  src: [
    {
      path: "../../public/fonts/LatomGrotesque-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LatomGrotesque-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/LatomGrotesque-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-latom",
});

export const metadata: Metadata = {
  title: "Destra Network - Decentralized AI | Decentralized Cloud Services",
  description:
    "Destra Network pioneers true Decentralized computing solutions for the emerging AI economy. Our comprehensive suite of offerings is designed to immerse web3 enthusiasts in authentic decentralized AI, leveraging the robust Destra GPU network and decentralized cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${latom.variable}`}>{children}</body>
    </html>
  );
}
