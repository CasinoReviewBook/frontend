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
              CS Skin casino
            </h3>

            <ul className="space-y-3 text-[16px] text-[#333333]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/partnership">Partnership</Link>
              </li>
              <li>
                <Link href="/faq">F.A.Q</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-[162px]">
            <h3 className="text-[18px] font-bold text-black mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-[16px] text-[#333333]">
              <li><Link href="#">Profile</Link></li>
              <li><Link href="#">Wallet</Link></li>
              <li><Link href="#">Cards</Link></li>
              <li><Link href="#">Achievements</Link></li>
              <li><Link href="#">Affiliates</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full sm:w-[162px]">
            <h3 className="text-[18px] font-bold text-black mb-4">
              Originals
            </h3>

            <ul className="space-y-3 text-[16px] text-[#333333]">
              <li><Link href="#">Cases</Link></li>
              <li><Link href="#">Battles</Link></li>
              <li><Link href="#">Battle pass</Link></li>
              <li><Link href="#">Roulette</Link></li>
              <li><Link href="#">Coin flip</Link></li>
              <li><Link href="#">Pinko</Link></li>
              <li><Link href="#">Mines</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="w-full sm:w-[162px] flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-black mb-4">
                Terms
              </h3>

              <ul className="space-y-3 text-[16px] text-[#333333]">
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