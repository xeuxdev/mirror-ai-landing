"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Docs",
    href: "",
  },
  {
    name: "Products",
    href: "#products",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scrolled Navbar */}
      {isScrolled && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[760px] p-4 sm:p-2 flex justify-between items-center rounded-[32px] bg-[#171717] z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link href="/">
            <Image
              alt="logo"
              width={36}
              height={36}
              src="/LogoScroll.svg"
              className="w-9 h-9"
            />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                className="text-[#D4D4D4] text-base font-bold"
                key={link.href}
              >
                <a target="_blank" href={link.href}>
                  {link.name}
                </a>
              </div>
            ))}
          </div>
          <div className="flex gap-x-3">
            {/* <div className="flex items-center p-1.5 px-2.5 rounded-lg">
              <a
                className="flex items-center"
                href="mailto:contact@destra.network"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-open size-6 text-white"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>
              </a>
            </div> */}
            <div className="flex items-center p-1.5 rounded-lg">
              <a target="_blank" href="">
                <Image
                  alt="alt"
                  width={100}
                  height={100}
                  className="size-6"
                  src="/telegram.svg"
                />
              </a>
            </div>
            <div className="flex items-center p-1.5 rounded-lg bg-white">
              <a target="_blank" href="">
                <svg
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                >
                  <path
                    d="M18.6127 15.4117L24.8363 8.2407L23.3539 8.24734L17.9499 14.4738L13.5838 8.29108L8.58008 8.31348L15.1825 17.6628L8.6556 25.1827L10.1381 25.176L15.8448 18.6007L20.4557 25.1298L25.4595 25.1074L18.6123 15.4117L18.6127 15.4117ZM16.5926 17.7391L15.9237 16.8082L10.6016 9.40067L12.8786 9.39048L17.1736 15.3686L17.8425 16.2995L23.4255 24.0701L21.1485 24.0803L16.5926 17.7395L16.5926 17.7391Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="sm:hidden z-50 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              alt="menu"
              width={24}
              height={24}
              src="/media/menu.1cfe0588.svg"
            />
          </div>
        </div>
      )}

      {/* Original Navbar */}
      <div
        className={`hidden md:flex w-full p-8 mx-auto items-center text-white justify-between ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <div className="animate-fade-in-up">
          <Link href="/">
            <Image
              alt="logo"
              width={180}
              height={40}
              className="z-50"
              src="/media/logo.636487f6.svg"
            />
          </Link>
        </div>
        <div className="flex gap-x-6 text-lg font-bold">
          {navLinks.map((link) => (
            <div className="animate-fade-in-up delay-100" key={link.href}>
              <a
                target="_blank"
                className="hover:text-red-500 active:text-red-500"
                href={link.href}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className="flex gap-x-3 animate-fade-in-up delay-700">
          {/* <div className=" flex items-center justify-end gap-1 py-1 px-3 rounded-[16px] bg-white">
            <a
              target="_blank"
              className="flex gap-0.5 items-center"
              href="mailto:contact@destra.network"
            >
              <Image
                alt="alt"
                width={100}
                height={100}
                className="size-6"
                src="/mail.svg"
              />
              <span className="text-[#FF3838] font-bold text-base leading-normal">
                Contact Us
              </span>
            </a>
          </div> */}
          <div className=" flex items-center gap-1 rounded-[16px] justify-end p-2 bg-white">
            <a target="_blank" href="">
              <Image
                alt="alt"
                width={100}
                height={100}
                className="size-6"
                src="/telegramnav.svg"
              />
            </a>
          </div>
          <div className=" flex items-center gap-1 rounded-[16px] justify-end p-2 bg-white">
            <a target="_blank" href="">
              <svg
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <path
                  d="M18.6127 15.4117L24.8363 8.2407L23.3539 8.24734L17.9499 14.4738L13.5838 8.29108L8.58008 8.31348L15.1825 17.6628L8.6556 25.1827L10.1381 25.176L15.8448 18.6007L20.4557 25.1298L25.4595 25.1074L18.6123 15.4117L18.6127 15.4117ZM16.5926 17.7391L15.9237 16.8082L10.6016 9.40067L12.8786 9.39048L17.1736 15.3686L17.8425 16.2995L23.4255 24.0701L21.1485 24.0803L16.5926 17.7395L16.5926 17.7391Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden w-full max-w-screen-sm mx-auto flex items-center text-white justify-between py-4 px-4 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <div className="animate-fade-in-up">
          <Link href="/">
            <Image
              alt="logo"
              width={160}
              height={50}
              className="z-50"
              src="/media/logo.636487f6.svg"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer z-50 animate-fade-in-up delay-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <Image
              alt="menu"
              width={24}
              height={24}
              src="/media/menu.1cfe0588.svg"
            />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40">
          <div className="w-full max-w-screen-sm px-4 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col gap-y-6 text-2xl font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  className="uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-y-4 my-6">
              <div className="text-sm flex flex-col items-center gap-y-2 text-[#A3A3A3]">
                <Link className="border-b border-[#A3A3A3]" href="/">
                  TERMS & CONDITIONS
                </Link>
                <Link className="border-b border-[#A3A3A3]" href="/">
                  PRIVACY POLICY
                </Link>
              </div>
              <p className="text-lg font-medium">FOLLOW US</p>
              <div className="flex items-center gap-x-3">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    alt="x"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    src="/socials/x.svg"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    alt="Medium"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    src="/socials/Medium.svg"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    alt="tg"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    src="/socials/tg.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
