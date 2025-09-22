"use client";

import { GermanyFlag, Logo } from "@/utils";
import { FaDrupal } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const navItems = [
        { label: "Startseite", href: "/" },
        { label: "Drupal", href: "/", icon: <FaDrupal size={16} className="text-[#009ced]" />, hasDropdown: true },
        { label: "Services", href: "/", hasDropdown: true },
        { label: "Projects / References", href: "/" },
        { label: "Blog", href: "/" },
    ];

    return (
        <header className="fixed inset-0 w-full z-10 h-[110px] flex flex-col justify-center">
            <div className="container mx-auto flex items-center justify-between px-4  ">

                <Link href="/" aria-label="Home">
                    <Image src={Logo} alt="Company Logo" width={34} height={34} priority />
                </Link>

                <nav className="flex items-center gap-1">
                    <ul className="flex items-center gap-[30px]">
                        {navItems.map(({ label, href, icon, hasDropdown }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="flex items-center gap-1 hover:text-[#0DF4C7] transition-colors duration-200 text-base font-[400] leading-[100%] font-dmsans text-white"
                                >
                                    {icon && icon}
                                    <span className="hover:text-[#0DF4C7] transition-colors duration-300">{label}</span>
                                    {hasDropdown && <MdKeyboardArrowDown size={16} />}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="ml-4 flex items-center gap-[10px]">
                        <button className="h-[42px] max-w-[140px] w-full rounded-[60px] bg-gradient-to-b from-[#0752D8] to-[#0DF4C7] px-[29px] py-[13px] font-figtree text-base font-[500] leading-[100%] text-white">
                            Contact Us
                        </button>

                        <button className="flex h-[41px] w-[62px] items-center justify-center gap-1 rounded-[43px] border border-solid border-[#5a5c69] bg-[#313344]">
                            <Image
                                src={GermanyFlag}
                                alt="Germany Flag"
                                width={19}
                                height={19}
                                className="h-[19px] max-w-[19px]"
                            />
                            <MdKeyboardArrowDown size={16} className="text-white" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
