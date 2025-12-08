"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className="bg-[#111111] text-white w-full max-w-screen-2xl mx-auto py-11 md:px-16 flex flex-col gap-y-5 md:gap-y-11">
      <motion.div
        className="w-full flex flex-col gap-y-6 md:flex-row items-center justify-between py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[170px] h-[42px] relative">
          <Image
            alt="logo"
            className="size-fit"
            loading="lazy"
            src="/logo.svg"
            fill
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-6">
          <a
            target="_blank"
            className="uppercase text-xs md:text-lg"
            href="https://destra-network.gitbook.io/documentation"
          >
            docs
          </a>
          <a
            target="_blank"
            className="uppercase text-xs md:text-lg"
            href="https://destranetwork.io/"
          >
            projects
          </a>
          <a
            target="_blank"
            className="uppercase text-xs md:text-lg"
            href="https://destranetwork.io/gpu-node"
          >
            gpu network
          </a>
          <a
            target="_blank"
            className="uppercase text-xs md:text-lg"
            href="https://ocai.destranetwork.io/"
          >
            deploy ai
          </a>
        </div>
        <div className="flex items-center gap-x-6">
          <a
            href="https://x.com/destranetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="x"
              loading="lazy"
              width="40"
              height="40"
              className="size-5 md:size-8"
              src="/socials/x.svg"
            />
          </a>
          <a
            href="https://medium.com/@destranetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Medium"
              loading="lazy"
              width="40"
              height="40"
              className="size-5 md:size-8"
              src="/socials/Medium.svg"
            />
          </a>
          <a
            href="https://t.me/DestraNetwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="tg"
              loading="lazy"
              width="40"
              height="40"
              className="size-5 md:size-8"
              src="/socials/tg.svg"
            />
          </a>
        </div>
      </motion.div>
      <motion.hr
        className="border-[#A3A3A3] mx-10 md:mx-0"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.div
        className="flex flex-col md:flex-row gap-y-4 text-xs md:text-base items-center justify-between text-[#A3A3A3] capitalize"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>Destra Network @2024 all rights reserved</p>
        <div className="relative">
          <div className=" text-center   py-2.5 px-6 rounded-xl text-xs sm:text-sm md:text-base cursor-pointer">
            CA: 0xf94e7d0710709388bce3161c32b4eea56d3f91cc
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <a target="_blank" href="/tnc">
            terms &amp; conditions
          </a>
          <a target="_blank" href="/privacy">
            privacy policy
          </a>
        </div>
      </motion.div>
    </div>
  );
}
