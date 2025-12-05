import React from "react";
import { Svgs } from "./svgs";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative max-w-screen-2xl w-11/12 mx-auto mt-4 sm:mt-4">
      <div>
        <div className="animate-fade-in-up">
          <a target="_blank" href="https://stake.destranetwork.io/">
            <div className="z-10 flex min-h-8 items-center justify-center">
              <div className="group rounded-full border border-[#404040] bg-[#171717] text-base text-[#D4D4D4] transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <p
                  style={{ "--shimmer-width": "100px" } as React.CSSProperties}
                  className="mx-auto max-w-md dark:text-neutral-400/70 animate-shimmer bg-clip-text bg-no-repeat bg-position-[0_0] bg-size-[var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-[#101010]"
                >
                  <span> Staking Live Now </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    viewBox="0 0 33 32"
                    fill="none"
                    className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  >
                    <circle
                      cx="16.1495"
                      cy="15.9996"
                      r="7.27011"
                      fill="#22C55E"
                    ></circle>
                    <circle
                      opacity="0.2"
                      cx="16.1497"
                      cy="15.9998"
                      r="15.8621"
                      fill="#22C55E"
                    ></circle>
                  </svg>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col md:items-center items-center justify-center gap-y-8 p-4 mt-4 pb-4">
          <div className="hidden font-latom  text-4xl md:text-6xl font-semibold md:text-center hero-text1 gap-y-5 md:flex flex-col leading-none animate-fade-in-up delay-100">
            <h2>Empowering the next-gen AI with</h2>
            <h2 className="text-3xl md:text-5xl hero-text2">
              decentralized computing
            </h2>
          </div>
          <div className="md:hidden text-5xl md:text-6xl font-semibold md:text-center  gap-y-2 flex flex-col leading-[1.375]">
            <h2 className="flex flex-col items-center text-[#FFF] self-stretch animate-fade-in-up delay-100">
              Empowering<span className="header-text">the next-gen </span>
              <span className="hero-text1 ">AI with </span>
            </h2>
            <h2 className="text-5xl md:text-5xl hero-text2 flex items-center flex-col animate-fade-in-up delay-100">
              decentralized<span className="hero-text3">computing </span>
            </h2>
          </div>
          <p className="text-[#D4D4D4] font-normal md:text-lg text-sm items-center text-center md:text-center md:max-w-[984px]  leading-relaxed animate-fade-in-up delay-200">
            Destra Network pioneers true Decentralized computing solutions for
            the emerging AI economy. Our comprehensive suite of offerings is
            designed to immerse web3 enthusiasts in authentic decentralized AI
            <span className="inline md:hidden">.</span>
            <span className="hidden md:inline">
              , leveraging the robust Destra GPU network and cloud solutions.
            </span>
          </p>
          <div className="flex gap-1">
            <a
              target="_blank"
              className="justify-center"
              href="https://destranetwork.io/"
            >
              <button className="inline-flex py-3.5 px-8 justify-center items-center gap-2.5 rounded-3xl bg-[#FF3838] text-white text-lg font-bold not-italic leading-normal animate-fade-in-up delay-300">
                Deploy Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block animate-fade-in-up delay-500">
        <Svgs.hero />
      </div>

      <div className="md:hidden block animate-fade-in-up delay-500">
        <Svgs.heroMobile />
      </div>
    </section>
  );
}
