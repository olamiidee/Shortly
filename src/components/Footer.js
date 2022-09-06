import React from "react";

export default function Footer() {
  return (
    <section className="bg-veryDarkViolet px-6 py-16">
      <div className="container text-center mx-auto flex flex-col items-center justify-between space-y-16  md:flex-row md:items-start md:space-y-0">
        {/* Logo */}
        <img src="images/logo.svg" alt="" />

        {/* Menus Container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* Menu 1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="text-white font-extrabold mb-5">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start md:text-left">
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Link Shortening
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Branded Links
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Analytics
              </a>
            </div>
          </div>
          {/* Menu  */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="text-white font-extrabold mb-5">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Blog
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Developers
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Support
              </a>
            </div>
          </div>
          {/* Menu 3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="text-white font-extrabold mb-5">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a className="text-grayishViolet hover:text-cyan" href="#">
                About
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Our Team
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Careers
              </a>
              <a className="text-grayishViolet hover:text-cyan" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* Social Container */}
        <div className="flex space-x-6">
          <a href="#">
            <img src="images/icon-facebook.svg" alt="" class="" />
          </a>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="images/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="images/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
