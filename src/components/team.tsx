"use client";

import React from "react";
import { motion } from "framer-motion";

export function TeamSection() {
  return (
    <div className="flex flex-col w-full items-center py-10 md:max-w-screen-2xl mx-auto bg-white  ">
      <div className="flex flex-col w-full items-center py-10 md:max-w-screen-2xl mx-auto bg-white box-grid1">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center text-center gap-x-4">
            <motion.h4
              className="flex flex-col items-center text-4xl md:text-5xl font-semibold  hero-text2 leading-snug sub-headings mt-[50px] px-8 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Expert Team
            </motion.h4>
          </div>
          <motion.p
            className="text-sm md:text-lg font-medium leading-6 not-italic max-w-[573px] mx-auto text-center text-[#404040] mt-2 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A diverse group of professionals committed to pushing boundaries and
            delivering excellence.
          </motion.p>
        </div>
        <div className="flex flex-wrap w-full justify-between px-8 items-center max-w-[1320px] gap-4 mt-10">
          <motion.div
            className="flex flex-col items-center gap-y-2.5 w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              alt="alt"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              data-nimg="1"
              className=" md:w-[180px] md:h-[180px]  w-[120px] h-[120px]"
              src="/img1.png"
            />
            <div className="flex flex-col items-center justify-center">
              <h6 className="flex items-center gap-x-2 text-xl font-normal">
                Dexter{" "}
                <img
                  alt="alt"
                  loading="lazy"
                  width="21"
                  height="21"
                  decoding="async"
                  data-nimg="1"
                  className="size-4 md:size-fit"
                  src="/media/tick.3b4ad98e.svg"
                />
              </h6>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-y-2.5 w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              alt="alt"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              data-nimg="1"
              className=" md:w-[180px] md:h-[180px]  w-[120px] h-[120px]"
              src="/img2.png"
            />
            <div className="flex flex-col items-center justify-center">
              <h6 className="flex items-center gap-x-2 text-xl font-normal">
                Diesel{" "}
                <img
                  alt="alt"
                  loading="lazy"
                  width="21"
                  height="21"
                  decoding="async"
                  data-nimg="1"
                  className="size-4 md:size-fit"
                  src="/media/tick.3b4ad98e.svg"
                />
              </h6>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-y-2.5 w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              alt="alt"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              data-nimg="1"
              className=" md:w-[180px] md:h-[180px]  w-[120px] h-[120px]"
              src="/img3.png"
            />
            <div className="flex flex-col items-center justify-center">
              <h6 className="flex items-center gap-x-2 text-xl font-normal">
                Joules{" "}
                <img
                  alt="alt"
                  loading="lazy"
                  width="21"
                  height="21"
                  decoding="async"
                  data-nimg="1"
                  className="size-4 md:size-fit"
                  src="/media/tick.3b4ad98e.svg"
                />
              </h6>
            </div>
          </motion.div>
        </div>
        <a target="_blank" href="">
          <motion.button
            className="text-[#FF3838] md:text-lg text-base font-normal flex items-center  py-3.5 px-8 justify-center gap-2.5 shrink-0 rounded-3xl border border-[#FF3838] bg-white mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Team KYC{" "}
            <img
              alt="alt"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="size-5"
              src="/media/link.1d3e8d02.svg"
            />
          </motion.button>
        </a>
        <div className="flex flex-col 2xl:h-fit items-center gap-6 w-full pt-28 pb-28 ">
          <motion.div
            className="flex justify-center items-center gap-4 self-stretch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-center  text-4xl md:text-5xl font-semibold sub-headings text-[40px] md:text-[64px] not-italic ">
              Partnerships
            </span>
          </motion.div>
          <motion.div
            className="flex md:items-center md:flex-row flex-col gap-10 md:gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              alt="ankr-partners"
              loading="lazy"
              width="159"
              height="50"
              decoding="async"
              data-nimg="1"
              src="/partners/ankr.svg"
            />
            <div className="bg-[#262626] w-[1px] h-12 md:block hidden"></div>
            <img
              alt="ankr-partners"
              loading="lazy"
              width="196"
              height="50"
              decoding="async"
              data-nimg="1"
              src="/partners/arb.svg"
            />
            <div className="bg-[#262626] w-[1px] h-12 md:block hidden"></div>
            <img
              alt="ankr-partners"
              loading="lazy"
              width="150"
              height="50"
              decoding="async"
              data-nimg="1"
              src="/partners/file.svg"
            />
            <div className="bg-[#262626] w-[1px] h-12 md:block hidden"></div>
            <img
              alt="ankr-partners"
              loading="lazy"
              width="180"
              height="50"
              decoding="async"
              data-nimg="1"
              src="/partners/lighthouse.svg"
            />
            <div className="bg-[#262626] w-[1px] h-12 md:block hidden"></div>
            <img
              alt="assure-partners"
              loading="lazy"
              width="150"
              height="50"
              decoding="async"
              data-nimg="1"
              src="/partners/assureDefi.svg"
            />
            <div className="bg-[#262626] w-[1px] h-12 md:block hidden"></div>
            <img
              alt="assure-partners"
              loading="lazy"
              width="150"
              height="50"
              decoding="async"
              data-nimg="1"
              src="/partners/hacken.svg"
            />
          </motion.div>
        </div>
      </div>
      <div className="3xl:h-fit flex items-center justify-center flex-col w-full mb-20 pt-8 box-grid1">
        <div className="flex max-w-[428px] sm:w-full flex-col justify-center items-center gap-4 mx-auto mb-3 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="z-10 flex min-h-[2rem]  items-center justify-center">
              <div className="group rounded-full border border-[#404040] bg-[#171717] text-base text-[#D4D4D4] transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <p
                  style={{ "--shimmer-width": "100px" } as React.CSSProperties}
                  className="mx-auto max-w-md dark:text-neutral-400/70 animate-shimmer bg-clip-text bg-no-repeat bg-position-[0_0] bg-size-[var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                >
                  <span>☁️ Cloud Efficiency ☁️</span>
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col items-center gap-2 justify-center self-stretch ">
            <motion.div
              className="self-stretch sub-headings text-center text-4xl md:text-5xl leading-normal font-semibold not-italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Echo Subnets
            </motion.div>
            <motion.p
              className="text-[#171717] self-stretch text-center text-sm not-italic leading-[24px] font-normal text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI-powered L3 blockchain with a complete suite of decentralized
              cloud services for enterprises.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="subnet-L3 max-w-[327px] mb-[10px] flex items-start flex-col md:max-w-[605px] w-full mx-auto shrink-0 md:flex-row px-4 py-4 sm:py-2 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex max-w-[228px] md:max-w-[691px] w-full flex-col  justify-center items-start gap-2 ml-2 mt-1">
            <motion.h3
              className="self-stretch text-[#171717] text-lg  font-semibold leading-[32px] not-italic md:mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              AI Powered L3
            </motion.h3>
            <motion.div
              className="text-[#525252] text-sm font-normal leading-5 self-stretch"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              A tailored L3 blockchain for enterprises, powered by Echo AI.
            </motion.div>
            <motion.div
              className="ml-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="rounded-3xl  border border-[#FF3838] bg-[#fff] gap-2.5 items-center justify-center py-2 px-4 flex text-[#FF3838] text-sm font-normal leading-normal mt-4">
                <a href="">Get Now</a>
              </button>
            </motion.div>
          </div>
          <img
            alt="AiPowered"
            loading="lazy"
            width="180"
            height="180"
            decoding="async"
            data-nimg="1"
            className="w-full p-2"
            src="/AIPoweredL3.svg"
          />
        </motion.div>
      </div>
    </div>
  );
}
