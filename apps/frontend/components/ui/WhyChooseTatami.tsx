import Image from "next/image";
import type React from "react";

const WhyChooseTatami: React.FC = () => {
  return (
    <section className="text-white flex flex-col sm:flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 sm:py-20 md:py-24 lg:py-28 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
      {/* Image Section */}
      <div className="w-full sm:w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/IMG-WhyChooseTatami1.png"
          alt="Tatami Concept"
          width={264}
          height={264}
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-auto object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Why choose Tatami?
        </h2>

        {/* Benefits List */}
        {/* Benefits List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
          {/* Benefit 1 */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-[#FEB913] text-black font-bold text-sm">
              x10
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg md:text-[18px] lg:text-xl font-bold mb-1">
                Build faster with Tatami
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-[15px] lg:text-lg leading-snug">
                Accelerates development
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-[#FEB913] text-black">
              <Image
                src="/IconMouse.svg"
                alt="Mouse - No-code game development"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-7 2xl:h-7 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg md:text-[18px] lg:text-xl font-bold mb-1">
                No-code game development
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-[15px] lg:text-lg leading-snug">
                Code without much effort
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#FEB913] text-black">
              <Image
                src="/IconLight.svg"
                alt="Lightbulb - Think in the idea"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg md:text-[18px] lg:text-xl font-bold mb-1">
                Think about the idea
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-[15px] lg:text-lg leading-snug">
                Don’t think about code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTatami;
