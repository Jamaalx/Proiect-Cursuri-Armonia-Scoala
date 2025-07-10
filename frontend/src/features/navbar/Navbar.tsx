import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const buttonRef = useRef<SVGSVGElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (detailsRef.current && !detailsRef.current.contains(target)) {
        detailsRef.current.open = false;  // închide dropdown desktop
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFlipHamburger = () => {
    setMenuOpen(prev => !prev);
  };

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="md:container relative z-30 h-20 mx-4 md:mx-auto flex items-center justify-between bg-green-secondary-rgb rounded-full mt-11 text-white">
      {/* Mobile Menu */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ml-4">
            <svg
              ref={buttonRef}
              onClick={handleFlipHamburger}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-10 w-10 hamburger transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
        <ul
          ref={dropdownRef}
          className={`menu absolute -z-40 menu-lg dropdown-content -top-0 pt-24
              shadow rounded-[40px] w-full bg-green-secondary/90 flex flex-col items-center justify-center
            text-white ${menuOpen ? "" : "hidden"}`}>
          <li><Link to="/programe" onClick={handleItemClick}>Programe</Link></li>
          <li><Link to="/profesori" onClick={handleItemClick}>Profesori</Link></li>
          <li><Link to="/despre-noi" onClick={handleItemClick}>Despre Noi</Link></li>
          <li><Link to="/blogs" onClick={handleItemClick}>Blog</Link></li>
          <li><Link to="/Contact" onClick={handleItemClick}>Contact</Link></li>
          <li><Link to="/signup" onClick={handleItemClick}>Înregistrează-Te</Link></li>
        </ul>
      </div>

      {/* Desktop Left Menu */}
      <div className="hidden lg:flex z-20">
        <ul className="menu menu-horizontal px-1 text-lg xl:gap-8">
          <li><Link to="/programe">Programe</Link></li>
          <li><Link to="/profesori">Profesori</Link></li>
          <li><Link to="/despre-noi">Despre Noi</Link></li>
        </ul>
      </div>

      {/* Logo center */}
      <div className="navbar-center pr-7 xl:px-10">
        <Link to="/" className="btn btn-ghost hover:bg-transparent p-0 mb-4">
          <img src="/images/armonia.png" alt="Armonia Logo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Right Menu */}
      <div className="hidden lg:flex gap-0 xl:gap-8 items-center text-lg">
        <ul className="menu menu-horizontal px-0 text-lg xl:gap-8">
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <Link to="/signup" className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 mr-4 relative">
          <img src="/images/inregistreaza-te.png" alt="" />
          <div className="absolute mr-6 mt-2">Înregistrează-Te</div>
        </Link>
      </div>
    </div>
  );
}
