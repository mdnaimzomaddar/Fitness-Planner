import Image from "next/image";
import Banner from "../../assets/banner.png"
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-black py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-[#15171d] rounded-2xl p-8 md:p-12 gap-8">
        {/* Left Content */}
        <div className="max-w-xl space-y-5">
          <h2 className="text-[#C2F800] text-[13px] font-extrabold tracking-wider uppercase">
            WORKOUT LIBRARY
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight tracking-tight">
            TRAIN WITH INTENT. LOG <br className="hidden sm:inline" />
            EVERY SET.
          </h1>

          <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.`}
          </p>

          <div className="pt-2">
            <Link href="/">
              <button className="bg-[#C2F800] text-black px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#15171d] hover:text-[#C2F800] border-2 border-[#C2F800] transition-colors duration-200">
                BROWSE WORKOUTS
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <Image
            src={Banner}
            width={420}
            height={420}
            alt="Banner"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
