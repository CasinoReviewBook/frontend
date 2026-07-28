type GlobalLoaderProps = {
  label?: string;
};

export default function GlobalLoader({
  label = "LOADING LIVE PREMIUM CASINO",
}: GlobalLoaderProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#EEF3FE]/90 backdrop-blur-md overflow-hidden select-none">
      {/* Soft Light Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-300/20 blur-[90px] rounded-full pointer-events-none animate-pulse" />

      {/* Main Glass Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-8 text-center">
        
        {/* --- Sleek Minimalist Casino Chip Icon Loader --- */}
        <div className="relative mb-8 flex items-center justify-center drop-shadow-[0_12px_24px_rgba(11,105,245,0.18)]">
          
          {/* Subtle Outer Orbit Ring */}
          <div className="absolute w-28 h-28 rounded-full border border-[#0B69F5]/20 animate-[spin_8s_linear_infinite]" />
          
          {/* Active Accent Arc */}
          <div className="absolute w-28 h-28 rounded-full border-2 border-transparent border-t-[#0B69F5] animate-[spin_1.2s_ease-in-out_infinite]" />

          {/* Minimal SVG Casino Chip */}
          <div className="relative w-20 h-20 flex items-center justify-center animate-[spin_4s_linear_infinite]">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#0B69F5] fill-current"
            >
              {/* Outer Ring */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" opacity="0.2" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="18 10" />

              {/* Inner Rim */}
              <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.4" />

              {/* Minimal Center Spade */}
              <path
                d="M50 25 C45 35 34 38 34 47 C34 53 39 57 44 57 C47 57 49 55 50 53 C51 55 53 57 56 57 C61 57 66 53 66 47 C66 38 55 35 50 25 Z"
                fill="currentColor"
              />
              {/* Spade Base */}
              <path
                d="M50 51 L46 63 L54 63 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Center Pulsing Core Light */}
          <div className="absolute w-3 h-3 rounded-full bg-[#0B69F5] animate-ping opacity-75" />
        </div>

        {/* Brand Title */}
        <h1 className="font-poppins text-[34px] font-extrabold tracking-tight leading-none">
          <span className="text-[#16171D]">Casino Review </span>
          <span className="bg-gradient-to-r from-[#4D99FC] via-[#0B69F5] to-[#0649D9] bg-clip-text text-transparent">
            Book
          </span>
        </h1>

        {/* Clean, Modern Micro-Progress Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-[#0B69F5] animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 rounded-full bg-[#0B69F5]/70 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 rounded-full bg-[#0B69F5]/40 animate-bounce"></span>
        </div>

      </div>
    </div>
  );
}