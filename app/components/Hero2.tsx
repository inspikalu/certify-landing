import Image from "next/image";

export default function Component() {
  return (
    <section className="w-full bg-neutral-800/50 px-4 py-16 md:py-24 rounded-3xl my-5">
      <div className="container mx-auto max-w-6xl">
        <p className="mb-8 text-center text-lg text-white md:text-xl">
          The smart way to verify and protect product authenticity with secure
          NFT integration.
        </p>
        <div className="relative">
          <h1 className="text-center text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl break-words">
            <span className="relative inline-block">
              <span className="absolute -left-6 -top-8 flex flex-col items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm px-3 py-2 text-base rotate-[15deg] shadow-lg  -z-[2] md:z-0">
                <div className="w-16 aspect-square relative">
                  <Image 
                    src={"/cancel_badge.png"} 
                    alt="checked" 
                    fill 
                    className="object-contain"
                  />
                </div>
                Invalid
              </span>
            </span>
            CERTIFY YOUR <span className="text-[#BB86FC]">PRODUCTS</span> WITH
            <span className="text-[#8246F3]">CONFIDENCE</span>{" "}
            <span className="relative inline-block">
              <span className="absolute -right-6 bottom-0 md:-bottom-[5rem] flex flex-col items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm px-3 py-2 text-base -rotate-[15deg] shadow-lg  -z-[2] md:z-0">
                <div className="w-16 aspect-square relative">
                  <Image 
                    src={"/check_badge.png"} 
                    alt="checked" 
                    fill 
                    className="object-contain"
                  />
                </div>
                Verified
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}