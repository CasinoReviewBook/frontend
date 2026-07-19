import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className=" mx-auto py-[26px] pt-[54px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-[66px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[12px]">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={58}
                height={38}
              />
            </Link>

            <p className="text-[15px] leading-[22px] text-[#333333]">
              Abcd - Redefining dd dfd fd casino with elite unboxing and
              thrilling Battles
            </p>

            <div className="flex items-start gap-2 mt-2">
              <Image
                src="/icons/18plus.png"
                alt="18+"
                width={38}
                height={38}
              />

              <p className="text-[10px] leading-[14px] text-[#5B5B5B]">
                By accessing the site, you confirm that you are over 18 years
                of age
              </p>
            </div>
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
      </div>
    </footer>
  );
}