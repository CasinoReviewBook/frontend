import Image from "next/image";

type GlobalLoaderProps = {
  label?: string;
};

export default function GlobalLoader({
  label = "LOADING LIVE PREMIUM CASINO",
}: GlobalLoaderProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#EEF3FE]/90 backdrop-blur-md overflow-hidden">
      {/* Soft, Luxury Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-300/20 blur-[90px] rounded-full pointer-events-none animate-pulse" />

      {/* Main Glass Morphic Card Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-8 text-center  ">
        
        {/* GIF Wrapper with deep, soft glow */}
        <div className="relative drop-shadow-[0_15px_25px_rgba(11,105,245,0.12)] transform hover:scale-103 transition-transform duration-500">
          <Image
            src="/loader.gif"
            alt="Loading"
            width={276}
            height={169}
            priority
            unoptimized
            className="object-contain"
          />
        </div>

        {/* Brand Title */}
        <h1 className=" font-poppins text-[34px] font-extrabold tracking-tight leading-none">
          <span className="text-[#16171D]">Casino Review </span>
          <span className="bg-gradient-to-r from-[#4D99FC] via-[#0B69F5] to-[#0649D9] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Book
          </span>
        </h1>

        {/* Clean, Modern Micro-Loader Dot Sequence */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-[#0B69F5] animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 rounded-full bg-[#0B69F5]/70 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 rounded-full bg-[#0B69F5]/40 animate-bounce"></span>
        </div>

       
      </div>
    </div>
  );
}