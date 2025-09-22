"use client";
import { categories } from "@/constants";
import { useState } from "react";

export default function CategoryTabs() {
    const [active, setActive] = useState("All");

    return (
        <div className="flex flex-wrap gap-[22px] justify-center max-w-[990px] mx-auto">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 rounded-[70px] border font-figtree font-[400] text-base leading-[33px] transition-all duration-200 w-auto h-[43px] min-w-[90px] 
            ${active === cat
                            ? "bg-[#0752D8] text-white font-[600] border-lighty border-[#0752D8] shadow-md"
                            : "bg-white text-gray-800 border-slatey hover:border-[#0752D8] hover:bg-[#0752D8]  "
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
