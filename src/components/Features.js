import React from "react";

export default function Features() {
  return (
    <section id="features" className="bg-gray-100 pb-32">
      <div className="relative container px-6 mx-auto flex flex-col items-start md:flex-row md:space-x-7">
        {/* Horizontal Line */}
        <div className="hidden absolute top-24 left-16 w-10/12 h-3 bg-cyan md:block"></div>
        {/* Vertical Line */}
        <div className="absolute left-1/2 -ml-1 w-2 h-full  bg-cyan md:hidden"></div>
        {/* Box 1 */}
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
          {/* Image Positioning */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* Image Container for background and center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src="images/icon-brand-recognition.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        {/* Box 2 */}
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg mt-24 md:mt-8 md:w-1/3">
          {/* Image Positioning */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* Image Container for background and center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src="images/icon-detailed-records.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            detailed records
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        {/* Box 3 */}
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg mt-24 md:mt-16 md:w-1/3">
          {/* Image Positioning */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* Image Container for background and center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src="images/icon-fully-customizable.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Fully Customizable
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
