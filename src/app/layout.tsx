import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Loader } from "@/components/loader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
  title: "Echo AI - AI-Driven Autonomous Trading for the Decentralized Markets",
  description:
    "Echo AI connects directly to decentralized markets, enabling automated strategy deployment, real-time trade mirroring, and protocol-native yield generation. Built as an evolving AI ecosystem, Echo AI adapts to volatility, identifies opportunities, and routes capital across DeFi in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${latom.variable}`}>
        {" "}
        <Loader>
          <div className="max-w-screen-2xl mx-auto w-full overflow-x-clip">
            {/* navbar */}

            <Navbar />

            <main className="min-h-screen mx-auto md:w-full h-full flex flex-col">
              {children}
              <Footer />
            </main>
          </div>
        </Loader>
      </body>
    </html>
  );
}
