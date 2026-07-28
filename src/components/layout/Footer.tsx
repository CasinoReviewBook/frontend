import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className=" mx-auto py-[26px] pt-[54px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-[80px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            {/* Logo Section */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center justify-center w-full max-w-[340px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  /* Tight viewBox scaled for narrow width + 3-line text */
                  viewBox="250 200 660 260"
                  className="w-full h-auto max-h-[100px] block"
                >
                  <defs>
                    <linearGradient
                      id="vectorGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3165CD" />
                      <stop offset="45%" stopColor="#4A7BD1" />
                      <stop offset="75%" stopColor="#B88094" />
                      <stop offset="100%" stopColor="#D98A6C" />
                    </linearGradient>

                    <filter
                      id="subtleShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="8"
                        floodColor="#000000"
                        floodOpacity="0.08"
                      />
                    </filter>
                  </defs>

                  {/* Larger Icon Background */}
                  <rect
                    x="260"
                    y="210"
                    width="240"
                    height="240"
                    rx="60"
                    fill="#FFFFFF"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                    filter="url(#subtleShadow)"
                  />

                  {/* Scaled Star */}
                  <path
                    d="M 380 248 
           C 384 297, 395 317, 451 330 
           C 395 343, 384 363, 380 412 
           C 376 363, 365 343, 309 330 
           C 365 317, 376 297, 380 248 Z"
                    fill="url(#vectorGradient)"
                  />

                  {/* Circle */}
                  <circle
                    cx="426"
                    cy="276"
                    r="18"
                    fill="url(#vectorGradient)"
                  />

                  {/* 3-Line Text (Larger font, fits narrow widths easily) */}
                  <text
                    x="530"
                    y="272"
                    fontFamily="'Plus Jakarta Sans', 'Outfit', -apple-system, sans-serif"
                    fontSize="58"
                    letterSpacing="1.5"
                  >
                    <tspan
                      x="540"
                      dy="0"
                      fill="#2563EB"
                      fontWeight="500"
                    >
                      CASINO 
                    </tspan>

                    <tspan
                      x="540"
                      dy="66"
                      fill="#1E293B"
                      fontWeight="800"
                    >
                      REVIEWS
                    </tspan>

                    <tspan
                      x="540"
                      dy="66"
                      fill="#1E293B"
                      fontWeight="800"
                    >
                      BOOK
                    </tspan>
                  </text>
                </svg>
              </Link>
            </div>

            {/* Responsible Gambling Section */}
            <div className="border-t border-gray-200/80 pt-4">
              <div className="flex items-center gap-3">
                {/* 21+ Badge */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <span className="text-xs font-bold text-red-600">21+</span>
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold leading-none text-[#0F172A]">
                    Play Responsibly
                  </p>
                  <p className="text-xs text-[#64748B] leading-tight">
                    Support and responsible gambling resources
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Column 6 - Responsible Gambling */}
          <div className="w-full">
            <h3 className="mb-4 text-[18px] font-bold text-black">
              Responsible Gambling
            </h3>

            <ul className="space-y-3 text-[15px] text-[#333333]">
              <li>
                <a
                  href="https://www.gpwa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#2E68FB]"
                >
                  GPWA
                </a>
              </li>

              <li>
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#2E68FB]"
                >
                  GambleAware
                </a>
              </li>

              <li>
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#2E68FB]"
                >
                  GamCare
                </a>
              </li>

              <li>
                <a
                  href="https://www.gamblingtherapy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#2E68FB]"
                >
                  Gambling Therapy
                </a>
              </li>

              <li>
                <a
                  href="https://www.gamban.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#2E68FB]"
                >
                  GamBan
                </a>
              </li>

              <li>
                <a
                  href="https://www.betblocker.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#2E68FB]"
                >
                  BetBlocker
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full sm:w-[162px]">
            <h3 className="text-[18px] font-bold text-black mb-4">
              Casinos
            </h3>

            <ul className="space-y-2 text-[16px] text-[#333333]">
              <li><Link href="/casinos/accredited-casinos">Accredited Casinos</Link></li>
              <li><Link href="/casinos/online-casino">Online Casino</Link></li>
              <li><Link href="/casinos/reviews">Reviews</Link></li>
              <li><Link href="/casinos/exclusive-casinos">Exclusive Casinos</Link></li>

              <li><Link href="/casinos/best-crypto-casinos">Best Crypto Casinos</Link></li>
              <li><Link href="/casinos/casinos-by-country">Casinos by Country</Link></li>
              <li><Link href="/casinos/mobile-casinos">Mobile Casinos</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-[162px]">
            <h3 className="text-[18px] font-bold text-black mb-4">
              Bonuses
            </h3>

            <ul className="space-y-2 text-[16px] text-[#333333]">
              <li><Link href="/bonuses/casino-bonuses">Casino Bonuses</Link></li>
              <li><Link href="/bonuses/no-deposit-bonuses">No Deposit Bonuses</Link></li>
              <li><Link href="/bonuses/free-spins">Free Spins</Link></li>
              <li><Link href="/bonuses/high-roller-bonuses">High Roller Bonuses</Link></li>
              <li><Link href="/bonuses/welcome-bonuses">Welcome Bonuses</Link></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full sm:w-[162px]">
            <h3 className="text-[18px] font-bold text-black mb-4">
              Casino Reviews
            </h3>

            <ul className="space-y-2 text-[16px] text-[#333333]">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/forum">Forum</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/awards">Awards</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/submit-a-complaint">Submit a Complaint</Link></li>
              <li><Link href="/responsible-gambling">Responsible Gambling</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="w-full sm:w-[162px] flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-black mb-4">
                Terms
              </h3>

              <ul className="space-y-2 text-[16px] text-[#333333]">
                <li><Link href="#">Terms & Services</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Cookie Policy</Link></li>
                <li><Link href="#">Provably fair</Link></li>
              </ul>
              <div className="flex gap-5 mt-8">
                <Link href="#">
                  <Image
                    src="/icons/discord.png"
                    alt="Discord"
                    width={24}
                    height={24}
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/icons/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>

            {/* Social Icons */}

          </div>
        </div>
        <div className="mt-12 border-t border-gray-200/80 pt-6 text-center">
          <p className="text-xs font-medium text-[#94A3B8]">
            © {new Date().getFullYear()} Gamblers Guru. All rights reserved.
            Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}