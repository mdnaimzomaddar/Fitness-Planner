'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoIcon from "../../assets/logo.png"
import { useContext } from "react";
import { FitnessContext } from "../context/FitnessContext";

const Navbar = () => {
  const context = useContext(FitnessContext)
  const todayPlan = context?.todayPlan ?? []
  const savePlan = context?.savePlan ?? []
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Workouts" },
    { href: "/my-plan", label: "My Plan" },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const MenuLinks = (
    <>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`text-[12px] font-semibold hover:bg-[#1A2312] hover:rounded-3xl hover:text-[#C2F800] ${
              isActive(href)
                ? "bg-[#1A2312] rounded-3xl text-[#C2F800]"
                : "text-white"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  )

  return (
    <div className="navbar shadow-sm bg-black fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {MenuLinks}
          </ul>
        </div>
        <Link href="/" className="btn bg-black border-none shadow-none text-xl">
          <Image src={logoIcon} width={30} height={30} alt="Logo" />
          <span className="text-[18px] font-black text-[#ffffff]">FITLOG</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{MenuLinks}</ul>
      </div>

      <div className="navbar-end flex gap-1">
        <div className="flex justify-center items-center">
          <Link href="/my-plan" className="text-[14px] text-white font-semibold pl-5 pr-5 pt-3 pb-3">
            <h1>Plan</h1>
          </Link>
          <h2 className="bg-[#c2f800] text-black pl-2 pr-2 rounded-full">{todayPlan.length}</h2>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/my-plan" className="text-[14px] text-white font-semibold pl-5 pr-5 pt-3 pb-3">
            <h1>Saved</h1>
          </Link>
          <h2 className="text-white border-2 border-gray-800 pl-2 pr-2 rounded-full">{savePlan.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;