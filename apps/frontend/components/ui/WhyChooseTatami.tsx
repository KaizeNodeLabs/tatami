import Image from "next/image";
import type React from "react";

const WhyChooseTatami: React.FC = () => {
  return (
    <section className="text-white flex flex-col sm:flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-16 py-12 sm:py-14 md:py-16 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      <div className="w-full sm:w-full md:w-[48%] 2xl:w-[46%] flex justify-center md:justify-end">
        <Image
          src="/IMG-WhyChooseTatami1.png"
          alt="Tatami Concept"
          width={320}
          height={320}
          className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[264px] xl:w-[264px] 2xl:w-[264px] h-auto object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[52%] 2xl:w-[54%] text-left px-2 sm:px-4 md:px-4 lg:px-4 xl:px-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-center md:text-left">
          Why choose Tatami?
        </h2>

        {/* Benefits List */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {/* Benefit 1 */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-[37px] h-[37px] sm:w-[37px] sm:h-[37px] md:w-[37px] md:h-[37px] flex items-center justify-center rounded-full bg-[#FEB913] text-black font-bold text-xs md:text-sm">
              x10
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-sm sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-bold mb-1">
                Build faster with Tatami
              </h2>
              <p className="text-gray-300 text-[10px] sm:text-[12px] md:text-[14px] leading-tight">
                Accelerates development
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-[37px] h-[37px] sm:w-[37px] sm:h-[37px] md:w-[37px] md:h-[37px] flex items-center justify-center rounded-full bg-[#FEB913] text-black">
              <Image
                src="/IconMouse.svg"
                alt="Mouse - No-code game development"
                width={24}
                height={24}
                className="w-[20px] h-[20px] sm:w-[21px] sm:h-[21px] md:w-[21px] md:h-[21px] object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-sm sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-bold mb-1">
                No-code game development
              </h2>
              <p className="text-gray-300 text-[10px] sm:text-[12px] md:text-[14px] leading-tight">
                Code without much effort
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-[37px] h-[37px] sm:w-[37px] sm:h-[37px] md:w-[37px] md:h-[37px] flex items-center justify-center rounded-full bg-[#FEB913] text-black">
              <Image
                src="/IconLight.svg"
                alt="Lightbulb - Think in the idea"
                width={24}
                height={24}
                className="w-[20px] h-[20px] sm:w-[21px] sm:h-[21px] md:w-[21px] md:h-[21px] object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-sm sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-bold mb-1">
                Think about the idea
              </h2>
              <p className="text-gray-300 text-[10px] sm:text-[12px] md:text-[14px] leading-tight">
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
