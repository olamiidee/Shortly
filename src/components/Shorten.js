import React, { useRef } from "react";

export default function Shorten() {
  const inputRef = useRef();
  const errRef = useRef();
  const linkFormRef = useRef();

  // Validate a URL
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  }

  function formSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value === "") {
      errRef.current.innerHTML = "Please enter a link";
      inputRef.current.classList.add("border-red");
    } else if (!validURL(inputRef.value)) {
      errRef.current.innerHTML = "Please enter a valid URL";
      inputRef.current.classList.add("border-red");
    } else {
      errRef.current.innerHTML = "";
      inputRef.current.classList.remove("border-red");
      alert("Success");
    }
  }

  return (
    <section className="relative bg-gray-100">
      <div className="container p-6 md:max-w-4xl mx-auto mt-44 space-y-6">
        <form
          className="relative p-10 -mt-20 rounded-lg w-full bg-darkViolet flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
          id="link-form"
          ref={linkFormRef}
          onSubmit={formSubmit}
        >
          <input
            className="flex-1 focus:outline-none border-2 p-3 placeholder-yellow-500 rounded-lg"
            id="link-input"
            type="text"
            placeholder="shorten a link here"
            ref={inputRef}
          />
          <button className="bg-cyan hover:bg-cyanLight px-10 py-3 text-white rounded-lg md:py-2">
            Shorten it!
          </button>
          <div
            className="absolute left-10 bottom-3 text-xs text-red italic"
            id="error-msg"
            ref={errRef}
          ></div>
        </form>
        {/* Link 1 */}
        <div className="bg-white rounded-lg text-center p-6 flex flex-col items-center md:flex-row md:justify-between  ">
          <div className="font-extrabold">
            <p>https://frontendmentor.io</p>
          </div>
          <div className="md:flex md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-5">
            <p className="text-cyan font-extrabold">https://rel.ink/k4IKyk</p>
            <button className="bg-cyan hover:bg-cyanLight rounded-lg py-2 px-8 text-white">
              Copy
            </button>
          </div>
        </div>
        {/* Link 2 */}
        <div className="bg-white rounded-lg text-center p-6 flex flex-col items-center md:flex-row md:justify-between  ">
          <div className="font-extrabold">
            <p>https://twitter.com/frontendmentor</p>
          </div>
          <div className="md:flex md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-5">
            <p className="text-cyan font-extrabold">https://rel.ink/gxOXp9</p>
            <button className="bg-darkViolet hover:opacity-70 rounded-lg py-2 px-8 text-white">
              Copy
            </button>
          </div>
        </div>
        {/* Link 3 */}
        <div className="bg-white rounded-lg text-center p-6 flex flex-col items-center md:flex-row md:justify-between  ">
          <div className="font-extrabold">
            <p>https://linkedin.com/frontend-mentor</p>
          </div>
          <div className="md:flex md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-5">
            <p className="text-cyan font-extrabold">https://rel.ink/gob3X9</p>
            <button className="bg-cyan hover:bg-cyanLight rounded-lg py-2 px-8 text-white">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
/*


const errMsg = document.getElementById("error-msg");
const linkForm = document.getElementById("link-form");
const input = document.getElementById("link-input");

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

linkForm.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    errMsg.innerHTML = "Please enter a link";
    input.classList.add("border-red")
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red")
  } else {
    errMsg.innerHTML = "";
    input.classList.remove('border-red')
    alert('Success')
  }
} 

*/
