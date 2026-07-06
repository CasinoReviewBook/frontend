'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Home,
    Gift,
    Megaphone,
    Trophy,
    Wallet,
    X,
    Headphones,
    CircleHelp,
    Dices,
    Users,
    Crown,
    ShieldAlert,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    open: boolean;
    onClose?: () => void;
}

const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Promotions', href: '/promotions', icon: Gift },
    { name: 'Casino News', href: '/news', icon: Megaphone },
    { name: 'Top Casinos', href: '/top-casinos', icon: Trophy },
    { name: 'Payment Methods', href: '/payments', icon: Wallet },
    { name: 'Casino Games', href: '/games', icon: Dices },
    { name: 'Live Dealers', href: '/live', icon: Users },
    { name: 'VIP Club', href: '/vip', icon: Crown },
    { name: 'Responsible Play', href: '/responsible-gambling', icon: ShieldAlert },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div
            className={`fixed left-0 top-0 w-[260px] h-full z-50 transition-transform duration-300 ${
                open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
        >
            <aside className="w-full h-full bg-[#EEF3FE] flex flex-col">
                {/* Sticky Logo Header */}
                <div className="h-20 flex items-center justify-between px-[22px] shrink-0 sticky top-0 bg-[#EEF3FE] z-30">
                    <Link href="/" className="flex flex-col leading-none" onClick={onClose}>
                        <Image
                            src="/images/Logo.png"
                            alt="Logo"
                            width={58}
                            height={38}
                            priority
                        />
                    </Link>
                    {/* Close button on mobile */}
                    <button
                        onClick={onClose}
                        className="lg:hidden w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-slate-500 hover:bg-white"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Scrollable Content Container */}
                <div className="flex flex-col flex-1 overflow-y-auto px-[22px] pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {/* Join Bonus Card */}
                    <div className="relative w-[212px] h-[68px] rounded-[20px] bg-[#C9D8FF] backdrop-blur-[20px] flex items-center px-5 gap-4 mb-6 shrink-0 overflow-hidden shadow-[0_8px_30px_rgba(88,140,243,0.15)]">
                        <div className="absolute w-[45px] h-[48px] top-[8px] left-[12px] bg-[#2E68FB]/30 blur-[20px] rounded-full pointer-events-none" />
                        <div className="absolute w-[51px] h-[54px] top-[-7px] left-[166px] bg-[#2E68FB]/30 blur-[20px] rounded-full pointer-events-none" />
                        <div className="flex items-center justify-center overflow-hidden shrink-0 z-10">
                            <Image src="/icons/Group8.png" alt="Bonus" width={32} height={32} className="object-contain" />
                        </div>
                        <div className="leading-tight z-10">
                            <p className="text-[15px] font-semibold text-[#111827]">Join Now</p>
                            <p className="text-[14px] font-bold text-[#588CF3]">Get $100</p>
                        </div>
                    </div>

                    {/* Navigation Menu Links */}
                    <nav className="space-y-2 mb-6">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={onClose}
                                    className={`w-[212px] h-[46px] rounded-[8px] px-[10px] py-[11px] flex items-center gap-[10px] transition-all duration-300 ${
                                        isActive
                                            ? 'border border-[#C5D6FF] bg-[linear-gradient(180deg,rgba(88,140,243,0.02)_0%,rgba(88,140,243,0.02)_50.17%,rgba(88,140,243,0.2)_108.7%)] shadow-sm'
                                            : 'hover:border hover:border-[#C5D6FF] hover:bg-white/50'
                                    }`}
                                >
                                    <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#3B6BFF]' : 'text-slate-500'}`} />
                                    <span className={`text-[15px] font-medium transition-colors ${isActive ? 'text-[#172554]' : 'text-slate-700'}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="mt-2 rounded-tl-[12px] rounded-tr-[12px] shrink-0 relative bg-[#EEF3FE] flex items-center justify-center gap-3 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[212px] before:h-[2px] before:[background:radial-gradient(50%_50%_at_50%_50%,#588CF3_42.79%,#EEF3FE_100%)]"
                        style={{ '--divider-gradient': 'radial-gradient(50% 50% at 50% 50%, #588CF3 42.79%, #EEF3FE 100%)' } as React.CSSProperties}
                    />

                    {/* Live Platform Stats */}
                    <div className="bg-white/40 border border-slate-200/40 rounded-xl p-3 my-4 text-left shrink-0">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Live Platform Stats</p>
                        <div className="mt-2 space-y-1">
                            <p className="text-[13px] text-slate-600 font-medium">Active Players: <span className="text-emerald-500 font-semibold">14,204</span></p>
                            <p className="text-[13px] text-slate-600 font-medium">24h Payouts: <span className="text-[#3B6BFF] font-semibold">$1.2M</span></p>
                        </div>
                    </div>

                    {/* Promo Card */}
                    <div className="mt-auto pt-4 pb-2 shrink-0">
                        <div className="relative w-[212px] h-[280px] rounded-[20px] overflow-hidden mx-auto">
                            <img src="/images/sidebar.png" alt="Earn Now" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,rgba(58,62,69,0.0001)_0%,rgba(27,29,33,0.92)_56%)]" />
                            <button className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-[#7EA5FF]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#7EA5FF]">
                                <X size={14} />
                            </button>
                            <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-6 px-4 text-center">
                                <h3 className="text-white text-[16px] font-semibold leading-tight">Sign up and<br />Earn Now</h3>
                                <p className="text-white/80 text-[12px] leading-snug mt-2 max-w-[160px]">Share your referral code and bank an easy $100.</p>
                                <button className="mt-4 w-[144px] h-[38px] rounded-[20px] px-4 flex items-center justify-center text-[13px] font-semibold text-white bg-[linear-gradient(180deg,#CDDCFB_0%,#588CF3_100%)] shadow-[0_6px_15px_rgba(88,140,243,0.35)] transition-transform active:scale-95">
                                    Register now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Legal Text */}
                    <div className="text-center py-2 shrink-0">
                        <p className="text-[11px] text-slate-400 leading-normal max-w-[200px] mx-auto">18+ Only. Please play responsibly. Terms and Conditions apply.</p>
                    </div>

                    {/* Support Section */}
                    <div className="mt-2 h-[100px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 relative bg-[#EEF3FE] flex items-center justify-center gap-3 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[212px] before:h-[2px] before:[background:radial-gradient(50%_50%_at_50%_50%,#588CF3_42.79%,#EEF3FE_100%)]"
                        style={{ '--divider-gradient': 'radial-gradient(50% 50% at 50% 50%, #588CF3 42.79%, #EEF3FE 100%)' } as React.CSSProperties}
                    >
                        <button className="w-[96px] h-[40px] rounded-[10px] bg-white shadow-sm flex items-center justify-center gap-2 text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                            <Headphones size={16} className="text-slate-500" />
                            Support
                        </button>
                        <button className="w-[96px] h-[40px] rounded-[10px] text-white text-[13px] font-medium flex items-center justify-center gap-2 bg-[linear-gradient(180deg,#CDDCFB_0%,#588CF3_100%)] shadow-[0_6px_15px_rgba(88,140,243,0.25)] hover:opacity-95 transition-opacity">
                            <CircleHelp size={16} />
                            Help
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
