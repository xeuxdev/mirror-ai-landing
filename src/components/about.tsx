export function AboutSection() {
  return (
    <div className="bg-white md:w-full mb-10 mx-auto text-center">
      <div
        className="bg-white md:w-full mt-8 mb-8 p-4 md:p-8 mx-auto text-center box-grid"
        style={{ opacity: 1, visibility: "visible", willChange: "auto" }}
      >
        <div
          className="md:text-5xl text-4xl max-w-[697px] w-full mx-auto leading-none  font-semibold mt-4 items-center mb-7 sub-headings text-center not-italic"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          Train and use AI faster on Destra Network!
        </div>

        <div className="flex gap-2 mt-8 flex-col md:flex-row md:justify-evenly items-center md:ml-8 ">
          <div className="">
            <img
              alt="alt"
              loading="lazy"
              width="328"
              height="428"
              decoding="async"
              data-nimg="1"
              className=" w-full max-w-[600px] h-[510px] shrink-0"
              src="/media/DestraFaster.b356d3d0.svg"
            />
          </div>
          <div className="box-border rounded-3xl mt-4 md:mt-0 max-w-[850px] max-h-fit w-full mx-auto p-2 box-dots">
            <div className="flex flex-col items-center md:items-start text-start mt-4 md:mt-0">
              <div className="text-[#171717] items-start md:text-2xl text-lg font-bold not-italic leading-[32px] md:leading-[36px] md:max-w-[659px] md:p-4 p-3 ">
                Destra One Click AI (OCAI) Deployment enables access to
                exclusive AI models for the masses, trained at Destra Labs over
                years of historical data.
              </div>
              <div className="text-[#404040] items-start text-base md:text-lg font-medium leading-[24px] md:max-w-[561px] md:p-4 p-3 ">
                OCAI particularly aims to simplify the process of deploying AI
                models on the Destra Decentralized GPU Network and use them in a
                few simple clicks.
              </div>
              <a target="_blank" href="https://ocai.destranetwork.io/">
                <button className="inline-flex py-3 px-6 justify-center items-center gap-2.5 ml-2 rounded-3xl bg-[#FF3838] text-[#fff] text-lg font-bold not-italic leading-normal mb-5 md:mb-0">
                  Deploy AI
                </button>
              </a>
            </div>
            <div className="rounded-3xl p-4 mr-2 mb-3 bg-[#F5F5F5]  shrink-0 max-w-[314px]  md:max-w-[610px] float-end  mx-auto w-full hidden md:block">
              <div className=" md:max-w-[597px] max-w-[294px] shrink-0  justify-end gap-2 md:gap-3 content-center flex-wrap flex md:w-full items-center ">
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/meme.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Meme Analysis Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img className="aspect-square h-full w-full" src="/x.svg" />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Twitter Activity{" "}
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/token.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Token Sentiment
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/bands.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Bollinger Bands Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/rsi.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    RSI Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/wave.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Elliott Wave Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/macd.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    MACD Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/airdrop.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Airdrop Detection Model
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:hidden rounded-3xl p-4 md:mr-2 md:mb-3 bg-[#F5F5F5] shrink-0  md:max-w-[610px] float-end  md:mx-auto w-full ">
              <div className=" md:max-w-[597px] max-w-[294px] shrink-0  justify-end gap-2 md:gap-3 content-center flex-wrap flex md:w-full items-center">
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/meme.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Meme Analysis Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img className="aspect-square h-full w-full" src="/x.svg" />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Twitter Activity{" "}
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/token.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Token Sentiment
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/bands.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Bollinger Bands Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/rsi.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    RSI Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/wave.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Elliott Wave Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/macd.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    MACD Model
                  </div>
                </div>
                <div className="flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ">
                  <span className="relative flex shrink-0 overflow-hidden rounded-[12px] md:rounded-full w-4 h-4">
                    <img
                      className="aspect-square h-full w-full"
                      src="/airdrop.svg"
                    />
                  </span>
                  <div className="text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold">
                    Airdrop Detection Model
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Incentive ml-6 rounded-b-3xl w-full max-w-[1346px] mb-8 h-[258px]  mt-24 items-center justify-center md:block hidden  text-white ">
          <div className="flex max-w-[717px] ml-14 pt-10 flex-col items-start gap-[21px]">
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-4xl not-italic font-bold leading-normal ">
                Destra Incentive Program
              </h2>
              <p className="text-lg font-medium leading-normal self-stretch not-italic">
                Early Adopters program for a chance at a $100,000 reward pool
              </p>
            </div>
            <a target="_blank" href="https://rewards.destranetwork.io/">
              <button className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 py-2 flex rounded-xl hover:bg-[#ff3838] bg-[#FF3838] px-4 pt-3.5 pb-3 justify-center items-center gap-2.5 text-lg font-medium leading-normal not-italic">
                Participate
              </button>
            </a>
          </div>
        </div>

        <div className="IncentiveMobile max-w-[328px] mb-24 mt-24 w-full h-[500px] items-center justify-center md:hidden block text-white mx-auto">
          <div className="flex max-w-[328px] pt-10 flex-col items-center justify-center gap-[21px]">
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="text-3xl not-italic font-bold leading-normal ">
                Destra Incentive Program
              </h2>
              <p className="text-base font-semibold leading-normal not-italic text-balance">
                Early Adopters program for a chance at a $100,000 reward pool
              </p>
            </div>
            <a target="_blank" href="https://rewards.destranetwork.io/">
              <button className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 py-2 flex rounded-xl hover:bg-[#ff3838] bg-[#FF3838] px-4 pt-3.5 pb-3 justify-center items-center gap-2.5 text-lg font-semibold leading-normal not-italic">
                Participate
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
