"use client";
import { useState } from "react";

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-3 mt-5">
            <button
                onClick={() => handlePageChange(1)}
                className=" text-[#9C9C9C] font-dmsans font-[500] text-[16px] leading-[27px] mr-2"
            >
                ERSTE SEITE
            </button>

            {[...Array(totalPages)].map((_, idx) => {
                const page = idx + 1;
                return (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-[32px] h-[32px] rounded-full text-[18px]  font-[500]leading-[28px] border-solid border-[1px] flex items-center font-figtree justify-center 
              ${currentPage === page
                                ? "border-[#0752D8] text-[#212121] font-semibold"
                                : "border-[#C2C2C2] text-gray-700 hover:border-blue-400"
                            }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-[#484848] pl-2 disabled:opacity-50 font-dmsans font-[500] text-[16px] leading-[27px]"
            >
                ZURÜCK
            </button>
        </div>
    );
}
