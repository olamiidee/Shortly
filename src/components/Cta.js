import React from "react";

export default function Cta() {
  return (
    <section className="py-24 bg-darkViolet" id="cta">
      <div className="flex flex-col items-center space-y-10 p-2">
        <h5 className="text-4xl font-extrabold mx-auto text-white">
          Boost your links today
        </h5>
        <div>
          <a
            href="#"
            class="px-10 py-5 font-bold text-white bg-cyan rounded-full text-2xl focus:outline-none md:text-base md:py-3 "
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
