import Image from "next/image";
import "./Hero.css";

const VerifiedCard = function ({ verified = false }: { verified?: boolean }) {
  return (
    <div
      className={`${
        verified
          ? "bottom-0 right-[1.75rem] md:right-0 -rotate-[15deg]"
          : "top-0 left-[1.75rem] md:left-0 rotate-[15deg] z-1 md:z-10"
      } bg-white/20 backdrop-blur-sm rounded-lg absolute w-[6rem] md:w-[8rem] flex flex-col items-center justify-center`}
      style={{
        aspectRatio: "1.1/1",
      }}
    >
      <div className="w-[4rem] aspect-square relative">
        <Image
          src={verified ? "/check_badge.png" : "/cancel_badge.png"}
          alt="checked"
          fill
        />
      </div>
      {verified ? "Verified" : "Invalid"}
    </div>
  );
};
const Hero = () => {
  return (
    <div className="w-full bg-[rgba(51,51,51,0.5)] my-6 flex flex-col items-center justify-center text-white p-[3rem] rounded-[50px]">
      <div className="text-center font-bold">
        The smart way to verify and protect product authenticity with secure NFT
        integration.
      </div>
      <div className="text-center relative my-[2rem]">
        <span
          className="inline-block text-[5rem] font-[900] w-[70%] md:w-[17ch] z-10 relative break-words hyphens-auto"
          style={{
            lineHeight: ".9",
            wordSpacing: "normal",
          }}
        >
          Certify Your <span className="text-[#BB86FC]">Products</span> with{" "}
          <span className="text-[#8246F3]">Confidence</span>
        </span>
        <VerifiedCard />
        <VerifiedCard verified={true} />
      </div>
    </div>
  );
};

export default Hero;
