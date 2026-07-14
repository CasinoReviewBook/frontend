import Image from "next/image";

type GlobalLoaderProps = {
  label?: string;
};

export default function GlobalLoader({
  label = "LOADING LIVE PREMIUM CASINO",
}: GlobalLoaderProps) {
   return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#EEF3FE]/95 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <Image
            src="/loader.gif"
            alt="Loading"
            width={276}
            height={169}
            priority
            unoptimized
          />
  
          <h1 className="mt-6 text-center font-poppins text-[36px] font-bold">
            <span className="text-[#16171D]">Trusted </span>
            <span className="bg-[linear-gradient(270deg,#4D99FC_0%,#0B69F5_50%,#0649D9_100%)] bg-clip-text text-transparent">
              Casino Review
            </span>
          </h1>
  
          <p className="mt-4 font-poppins text-[17px] font-normal uppercase tracking-[0.08em] text-[#434343]">
            {label}
          </p>
        </div>
      </div>
    );
}