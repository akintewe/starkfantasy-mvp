"use client";

import { useState } from "react";

const pages = ["Home", "About", "Tournaments", "Rules", "Support"];
const pages2 = [
  "Help",
  "Starkfantasy League",
  "Market",
  "About",
  "Tournaments",
];

export default function NavBar({ active }: { active?: boolean }) {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center">
      <nav
        aria-label="Main navigation"
        className={`${
          active
            ? "bg-slate-900 rounded-[60px] w-[855px] h-[70px]"
            : "bg-slate-900 rounded-[40px] w-[700px] h-[70px]"
        } mx-auto flex justify-center items-center`}
      >
        <ul
          className={`flex ${
            active ? "w-full px-10" : "w-[595px]"
          } h-[22px] justify-between`}
        >
          {(active ? pages2 : pages).map((page, i) => (
            <li key={page}>
              <a
                href={`#${page.toLowerCase()}`}
                tabIndex={i + 1}
                className={`text-[20px] leading-[20px] max-h-[20px] font-bold hover:cursor-pointer text-center ${
                  active ? "font-kanit" : "font-openSans"
                } ${
                  active
                    ? page === "Starkfantasy League"
                      ? "text-[#FFB200] underline"
                      : "text-[#FF9500]"
                    : currentPage === page
                    ? "text-amber-500"
                    : "text-white hover:text-orange-600 hover:underline focus:text-orange-600 focus:underline"
                }`}
                onClick={() => handlePageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
