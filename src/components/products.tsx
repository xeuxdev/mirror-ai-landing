"use client";

import React from "react";
import { motion } from "framer-motion";

export function Products() {
  return (
    <>
      <section id="products">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="z-10 flex min-h-8  items-center justify-center">
            <div className="group rounded-full border border-[#404040] bg-[#171717] text-base text-[#D4D4D4] transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <p
                style={{ "--shimmer-width": "100px" } as React.CSSProperties}
                className="mx-auto max-w-md dark:text-neutral-400/70 animate-shimmer bg-clip-text bg-no-repeat bg-position-[0_0] bg-size-[var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
              >
                <span>✨ AI Simplified 🤖</span>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="header-text text-center md:text-5xl text-4xl font-semibold flex-wrap mx-auto max-w-[450px] pt-8 pb-10 leading-none px-8 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Unlock autonomous trading with intelligent on-chain execution
        </motion.div>
      </section>

      <div className="relative flex flex-col max-w-screen-2xl mx-auto w-11/12 items-center justify-center overflow-hidden bg-black ">
        {/* ai */}

        <div className="flex flex-col items-center justify-center gap-y-14 max-w-screen-2xl mx-auto">
          <div className="grid w-11/12 grid-cols-1 md:grid-cols-6 gap-x-10 gap-y-12 md:w-full overflow-hidden">
            <motion.div
              className="col-span-3 md:col-span-2  border-card box-grad w-full py-4 flex flex-col gap-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                alt="alt"
                loading="lazy"
                width="419"
                height="203"
                decoding="async"
                data-nimg="1"
                className="py-2 w-full h-60"
                src="/media/ImmerseinAILLMTraining.e22a1760.svg"
              />
              <motion.div
                className="w-5/6 mx-auto flex flex-col gap-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h6 className="text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold">
                  Adaptive Strategy Engine
                </h6>
                <p className="text-[#D4D4D4] text-sm not-italic font-normal leading-5">
                  Execute AI-driven trading strategies that learn from market
                  volatility, liquidity depth, and trader behavior in real time.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-3 md:col-span-2  box-grad border-card w-full py-4 flex flex-col gap-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                alt="alt"
                loading="lazy"
                width="418"
                height="248"
                decoding="async"
                data-nimg="1"
                className="py-2 w-full md:h-60 "
                src="/media/DestraExclusiveAIModels.7cc320b9.svg"
              />
              <motion.div
                className="w-5/6 mx-auto flex flex-col gap-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h6 className="text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold">
                  Smart Money Mirroring
                </h6>
                <p className="text-[#D4D4D4] text-sm not-italic font-normal leading-5">
                  Track and replicate winning traders, whale flows, and
                  high-performance wallets across decentralized markets.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-3 md:col-span-2  box-grad border-card w-full py-4 flex flex-col gap-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                alt="alt"
                loading="lazy"
                width="414"
                height="200"
                decoding="async"
                data-nimg="1"
                className="py-2 px-4 w-full h-60"
                src="/media/OneClickAniamation.748b32e1.svg"
              />
              <motion.div
                className="w-5/6 mx-auto flex flex-col gap-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h6 className="text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold">
                  One-Click Deployment
                </h6>
                <p className="text-[#D4D4D4] text-sm not-italic font-normal leading-5">
                  Activate strategies instantly with no manual setup,
                  configuration, or trading complexity required.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-3  box-grad border-card w-full py-4 flex flex-col-reverse md:flex-col gap-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-5/6 mx-auto md:text-center flex flex-col md:items-center gap-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h6 className="text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold">
                  AI-Managed Vaults
                </h6>
                <p className="text-[#D4D4D4] text-sm not-italic font-normal leading-5 md:w-1/2">
                  Diversify across multiple trading approaches, risk profiles,
                  and perpetuals strategies—all automated and continuously
                  optimized.
                </p>
              </motion.div>
              <div className="w-full md:h-72">
                <img
                  alt="alt"
                  loading="lazy"
                  width="644"
                  height="260"
                  decoding="async"
                  data-nimg="1"
                  className="pb-2 w-full h-fit"
                  src="/media/D-Rigs.a7a5b02c.svg"
                />
              </div>
            </motion.div>
            <motion.div
              className="col-span-3 box-grad border-card w-full py-4 flex flex-col-reverse md:flex-col gap-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-5/6 mx-auto md:text-center flex flex-col md:items-center  gap-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h6 className="text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold">
                  Live Performance Intelligence
                </h6>
                <p className="text-[#D4D4D4] text-sm not-italic font-normal leading-5 md:w-1/2">
                  Monitor returns, execution metrics, and strategy behavior with
                  on-chain transparency and real-time data visualization.
                </p>
              </motion.div>
              <div className="w-full md:h-72">
                <img
                  alt="alt"
                  loading="lazy"
                  width="644"
                  height="263"
                  decoding="async"
                  data-nimg="1"
                  className="pb-2 w-full h-fit md:block hidden"
                  src="/media/Destra_Nodes_Looping.81287a2e.svg"
                />
                <div className="md:hidden block pb-2 w-full h-fit">
                  <svg
                    width="644"
                    height="263"
                    viewBox="0 0 644 263"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="nodessvg pb-2 w-full h-fit"
                  >
                    <g id="Echo">
                      <g id="Group 106">
                        <g id="Vector">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M566.516 169.65V180.99C580.749 181.382 590 170.158 590 157.995C590 148.921 585.032 140.517 576.298 136.551C576.298 135.93 576.257 135.625 575.717 135.625H574.28C574.07 135.627 573.99 135.662 573.94 135.799C573.732 135.743 573.539 135.69 573.357 135.64C572.402 135.379 571.718 135.192 570.581 135H548V155.051H559.144V146.374H568.979C568.979 146.374 579.082 146.862 579.082 157.995C579.082 169.65 568.91 170.175 566.516 169.65ZM575.021 138.391L576.17 148.125C574.051 146.282 571.578 145.35 568.754 145.166L565.043 141.209V140.713L573.586 137.632C573.586 138.068 574.01 138.391 574.222 138.391H575.021ZM567.149 145.166L564.162 142.004H562.587C562.285 142.004 561.97 141.72 561.931 141.382L556.649 143.486V144.113L558.712 145.177L567.149 145.166ZM558.4 136.232H549.525L553.176 141.609H555.773C556.252 141.609 556.636 141.919 556.636 142.201L561.794 140.165L558.4 136.232ZM559.961 136.229L570.581 136.201L572.695 136.707L565.043 139.47C565.043 138.974 564.732 138.829 564.269 138.805H562.531C562.373 138.823 562.311 138.847 562.281 138.938L559.961 136.229ZM549.005 152.02V137.574L552.247 142.309V145.812L549.005 152.02ZM553.404 146.093H556.073C556.249 146.093 556.649 145.797 556.649 145.441L557.988 146.142V153.885H549.369L553.404 146.093ZM581.674 146.239L577.516 148.921L576.17 138.134L576.361 137.865C578.225 138.471 579.283 139.072 581.212 140.782L581.674 146.239Z"
                            fill="white"
                          ></path>
                          <path
                            d="M555.365 157.617H551.804C551.305 157.617 550.9 158.028 550.9 158.536V162.163C550.9 162.671 551.305 163.083 551.804 163.083H555.57L557.486 165.02V170.406L555.658 172.326C555.572 172.326 555.565 172.271 555.245 172.271H549.4C548.901 172.271 548.497 172.683 548.497 173.191V179.172C548.497 179.68 548.901 180.092 549.4 180.092H555.245C555.744 180.092 556.149 179.68 556.149 179.172V173.513L558.389 171.198H563.597C564.096 171.198 564.5 170.786 564.5 170.278V164.941C564.5 164.433 564.212 164.057 563.643 164.057H558.196L556.268 162.118V158.536C556.268 158.028 555.864 157.617 555.365 157.617Z"
                            fill="white"
                          ></path>
                        </g>
                        <g id="Group 68">
                          <circle
                            id="Ellipse 3971"
                            cx="286"
                            cy="114"
                            r="3"
                            fill="#676767"
                          ></circle>
                          <circle
                            id="Ellipse 3972"
                            cx="286"
                            cy="114"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 75">
                          <circle
                            id="Ellipse 3971_2"
                            cx="453"
                            cy="158"
                            r="3"
                            fill="#FF3838"
                          ></circle>
                          <circle
                            id="Ellipse 3972_2"
                            cx="453"
                            cy="158"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 69">
                          <circle
                            id="Ellipse 3971_3"
                            cx="177"
                            cy="90"
                            r="3"
                            fill="#676767"
                          ></circle>
                          <circle
                            id="Ellipse 3972_3"
                            cx="177"
                            cy="90"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 70">
                          <circle
                            id="Ellipse 3971_4"
                            cx="119"
                            cy="148"
                            r="3"
                            fill="#676767"
                          ></circle>
                          <circle
                            id="Ellipse 3972_4"
                            cx="119"
                            cy="148"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 71" opacity="0.4">
                          <circle
                            id="Ellipse 3971_5"
                            cx="286"
                            cy="167"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_5"
                            cx="286"
                            cy="167"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 72" opacity="0.2">
                          <circle
                            id="Ellipse 3971_6"
                            cx="202"
                            cy="220"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_6"
                            cx="202"
                            cy="220"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 73" opacity="0.2">
                          <circle
                            id="Ellipse 3971_7"
                            cx="453"
                            cy="73"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_7"
                            cx="453"
                            cy="73"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 74" opacity="0.2">
                          <circle
                            id="Ellipse 3971_8"
                            cx="453"
                            cy="114"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_8"
                            cx="453"
                            cy="114"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 76" opacity="0.2">
                          <circle
                            id="Ellipse 3971_9"
                            cx="526"
                            cy="158"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_9"
                            cx="526"
                            cy="158"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 77" opacity="0.2">
                          <circle
                            id="Ellipse 3971_10"
                            cx="286"
                            cy="32"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_10"
                            cx="286"
                            cy="32"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 78" opacity="0.2">
                          <circle
                            id="Ellipse 3971_11"
                            cx="119"
                            cy="33"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_11"
                            cx="119"
                            cy="33"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <g id="Group 79" opacity="0.2">
                          <circle
                            id="Ellipse 3971_12"
                            cx="588"
                            cy="73"
                            r="3"
                            fill="#D4D4D4"
                          ></circle>
                          <circle
                            id="Ellipse 3972_12"
                            cx="588"
                            cy="73"
                            r="4.5"
                            stroke="#8D8D8D"
                          ></circle>
                        </g>
                        <path
                          id="Background"
                          d="M119 32L200.5 113.5H526V190M286 32H453V114M286 32H202.5M286 32V166.5H202.5V217.5M592 72.75H389.5M453 220H119V126H56M93 210V174L188 79H356.5V158.5H552.5"
                          stroke="#DADADA"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                        ></path>
                        <path
                          className="glow"
                          id="highlightnodes"
                          d="M119 32L200.5 113.5H526V190M286 32H453V114M286 32H202.5M286 32V166.5H202.5V217.5M592 72.75H389.5M453 220H119V126H56M93 210V174L188 79H356.5V158.5H552.5"
                          stroke="#FF3838"
                          strokeWidth="2"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* cloud */}

        <div className="flex flex-col w-full items-center sm:gap-y-8 py-20 sm:py-[160px] h-full max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="z-10 flex min-h-8 items-center justify-center">
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
          <div className="flex flex-col items-center text-center mt-8 sm:mt-0 px-8 sm:px-0">
            <motion.h4
              className="text-4xl md:text-5xl font-semibold  hero-text2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Infrastructure Services Layer
            </motion.h4>
            <motion.p
              className="text-sm my-5 md:text-base text-[#FFF] max-w-[626px] leading-7 text-center mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enabling automation, data intelligence, and extensibility for
              AI-powered trading.
            </motion.p>
          </div>
          <div>
            <div className="hidden lg:block max-w-[1320px]  w-full justify-center items-center gap-8 ">
              <div
                className="relative"
                role="region"
                aria-roledescription="carousel"
              >
                <div className="overflow-hidden">
                  <div
                    className="flex -ml-4"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        className="flex flex-col  items-start  gap-y-8 box-grad p-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <img
                          alt="alt"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full"
                          src="/WebHosting.svg"
                        />
                        <motion.div
                          className="px-2 flex  flex-col gap-y-2  items-start"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h2 className="text-3xl font-semibold text-[#FCFCFC]">
                            <span className=" self-stretch text-white md:text-xl text-lg not-italic   font-semibold leading-8">
                              Automation & Scheduling
                            </span>
                          </h2>
                          <p className=" text-[#D4D4D4]  text-sm font-normal leading-5 lowercase  items-start self-start ">
                            Schedule model updates, rebalance trading vaults,
                            trigger execution logic, and automate workflows
                            fully on-chain and event-driven.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        className="flex flex-col  items-start  gap-y-8 box-grad p-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <img
                          alt="alt"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full"
                          src="/FileStorage.svg"
                        />
                        <motion.div
                          className="px-2 flex  flex-col gap-y-2  items-start"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h2 className="text-3xl font-semibold text-[#FCFCFC]">
                            <span className=" self-stretch text-white md:text-xl text-lg not-italic font-semibold leading-8">
                              Data & Oracle Integration
                            </span>
                          </h2>
                          <p className=" text-[#D4D4D4]  text-sm font-normal leading-5 lowercase  items-start self-start ">
                            Access aggregated real-time feeds including price
                            oracles, liquidity maps, funding rates, and on-chain
                            behavioral signals normalized for AI use.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        className="flex flex-col  items-start  gap-y-8 box-grad p-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <img
                          alt="alt"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full"
                          src="/NFTStorage.svg"
                        />
                        <motion.div
                          className="px-2 flex  flex-col gap-y-2  items-start"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h2 className="text-3xl font-semibold text-[#FCFCFC]">
                            <span className=" self-stretch text-white md:text-xl text-lg not-italic font-semibold leading-8">
                              Developer & Protocol Tooling
                            </span>
                          </h2>
                          <p className=" text-[#D4D4D4]  text-sm font-normal leading-5 lowercase  items-start self-start ">
                            Build, customize, and extend AI-powered trading
                            modules with SDKs, templates, and seamless
                            integrations across decentralized execution
                            environments.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex flex-wrap justify-center  ">
              <motion.div
                className="w-full md:w-1/2 p-2 py-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center gap-y-10 box-grad p-6">
                  <img
                    alt="alt"
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="w-full"
                    src="/WebHosting.svg"
                  />
                  <div className="px-2 flex flex-col gap-y-2  items-start">
                    <h2 className="text-3xl text-[#FCFCFC] font-semibold">
                      <span className=" self-stretch text-white md:text-xl text-lg not-italic font-semibold leading-8">
                        Automation & Scheduling
                      </span>
                    </h2>
                    <p className="text-base text-[#D4D4D4] items-start  ">
                      Schedule model updates, rebalance trading vaults, trigger
                      execution logic, and automate workflows fully on-chain and
                      event-driven.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 p-2 py-5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center gap-y-10 box-grad p-6">
                  <img
                    alt="alt"
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="w-full"
                    src="/FileStorage.svg"
                  />
                  <motion.div
                    className="px-2 flex flex-col gap-y-2  items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="text-3xl text-[#FCFCFC] font-semibold">
                      <span className=" self-stretch text-white md:text-xl text-lg not-italic   font-semibold leading-8">
                        Data & Oracle Integration
                      </span>
                    </h2>
                    <p className="text-base text-[#D4D4D4] items-start  ">
                      Access aggregated real-time feeds including price oracles,
                      liquidity maps, funding rates, and on-chain behavioral
                      signals normalized for AI use.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 p-2 py-5"
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center gap-y-10 box-grad p-6">
                  <img
                    alt="alt"
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="w-full"
                    src="/NFTStorage.svg"
                  />
                  <motion.div
                    className="px-2 flex flex-col gap-y-2  items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="text-3xl text-[#FCFCFC] font-semibold">
                      <span className=" self-stretch text-white md:text-xl text-lg not-italic   font-semibold leading-8">
                        Developer & Protocol Tooling
                      </span>
                    </h2>
                    <p className="text-base text-[#D4D4D4] items-start  ">
                      Build, customize, and extend AI-powered trading modules
                      with SDKs, templates, and seamless integrations across
                      decentralized execution environments.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
