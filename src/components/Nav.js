import React, { useRef } from "react";
export default function Nav() {
  const menuRef = useRef();
  const btnRef = useRef();

  function navToggle() {
    btnRef.current.classList.toggle("open");
    menuRef.current.classList.toggle("flex");
    menuRef.current.classList.toggle("hidden");
  }

  return (
    <div>
      <nav className="container w-full p-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            {/* Logo */}

            <img src="images/logo.svg" alt="" />

            {/* Nav Links */}

            <div className="hidden space-x-8 font-extrabold lg:flex">
              <a
                href="#features"
                class="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </a>
              <a
                href="#pricing"
                class="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </a>
              <a
                href="#resources"
                class="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </a>
            </div>
          </div>

          {/* buttons */}

          <div class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div class="hover:text-veryDarkViolet">Login</div>
            <a
              href="#"
              class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>

          {/* hamburger */}

          <button
            id="menu-btn"
            class="block hamburger lg:hidden focus:outline-none"
            type="button"
            onClick={navToggle}
            ref={btnRef}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 "
          ref={menuRef}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-extrabold text-white rounded-sm">
            <a className="w-full text-center" href="#">
              Features
            </a>
            <a className="w-full text-center" href="#">
              Pricing
            </a>
            <a className="w-full text-center" href="#">
              Resources
            </a>
            <a
              className="w-full text-center border-t border-gray-400 pt-6"
              href="#"
            >
              Login
            </a>
            <a
              className="w-full text-center bg-cyan rounded-full py-3"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
