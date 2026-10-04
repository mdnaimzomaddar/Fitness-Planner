import Image from "next/image";
import logoIcon from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
        <a className="btn bg-black border-none shadow-none text-xl">
            <Image
                src={logoIcon}
                width={30}
                height={30}
                alt="Logo"
                className="-rotate-45"
            />
            <span className="text-[18px] font-black text-[#ffffff]">FITLOG</span>
        </a>
      </nav>
      <aside className="grid-flow-col items-center justify-self-end">
        <p className="text-[12px] text-gray-300">Copyright © {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest</p>
      </aside>
    </footer>
  );
};

export default Footer;
