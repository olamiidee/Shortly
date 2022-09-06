import React from "react";

export default function Hero() {
  return (
    <section>
      {/* Hero Container */}
      <div className="container w-full mx-auto p-6 flex items-center flex-col-reverse lg:flex-row justify-between ">
        {/* Hero Content */}
        <div className="space-y-10 mt-32">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-center lg:text-left lg:max-w-md">
            More than just shorter links
          </h1>
          <p className="text-2xl text-center lg:text-left text-gray-400 lg:max-w-md">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          {/*Link  */}
          <div className="text-center lg:text-left">
            <a
              href="#"
              class="px-8 py-5 lg:py-4 lg:px-10 font-bold text-white bg-cyan rounded-full hover:opacity-70 text-2xl"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Hero Image */}
        <div className="md:w-180 lg:w-1/2">
          <img src="/images/illustration-working.svg" />
        </div>
      </div>
    </section>
  );
}
