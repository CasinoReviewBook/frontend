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
                <Link href="#" aria-label="Join our Discord">
                  <svg className="w-6 h-6 text-slate-500 hover:text-[#5865F2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                  </svg>
                </Link>

                <Link href="#" aria-label="Follow us on Instagram">
                  <svg className="w-6 h-6 text-slate-500 hover:text-[#E1306C] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>

                <Link href="#" aria-label="Follow us on Twitter">
                  <svg className="w-6 h-6 text-slate-500 hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
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