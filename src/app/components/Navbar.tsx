import Image from "next/image";
import Link from "next/link";
import logoIcon from "../../assets/logo.png"
const Navbar = () => {

    const MenuLinks = <>
        <li><Link href="/" className="text-[12px] text-white font-semibold hover:bg-[#1A2312] hover:rounded-3xl hover:text-[#C2F800]">Workouts</Link></li>
        <li><Link href="/my-plan" className="text-[12px] text-white font-semibold hover:bg-[#1A2312] hover:rounded-3xl hover:text-[#C2F800]">My Plan</Link></li>
    </>

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
        <a className="btn bg-black border-none shadow-none text-xl">
            <Image
                src={logoIcon}
                width={30}
                height={30}
                alt="Logo"
            />
            <span className="text-[18px] font-black text-[#ffffff]">FITLOG</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {MenuLinks}
        </ul>
      </div>
      <div className="navbar-end flex gap-1">
        <Link href="/my-plan" className="text-[14px] text-white font-semibold pl-5 pr-5 pt-3 pb-3 hover:bg-[#1A2312] hover:rounded-3xl hover:text-[#C2F800]">
            <h1>Plan</h1>
        </Link >
        <Link href="/my-plan" className="text-[14px] text-white font-semibold pl-5 pr-5 pt-3 pb-3 hover:bg-[#1A2312] hover:rounded-3xl hover:text-[#C2F800]">
            <h1>Saved</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
