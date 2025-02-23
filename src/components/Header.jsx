/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { useState } from "react";


/**
 * Components
 */
import Navbar from "./Navbar";


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-sky-100 to-sky-100">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a
            href="/"
            className="logo"
          >
          <b>Krish Soni</b>
        </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
          </div>

<a
  href="#contact"
  className="btn btn-secondary max-md:hidden md:justify-self-end bg-sky-800 text-sky-100 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-sky-950"
>
  Contact Me
</a>

</div>

    </header>
  )
}

export default Header