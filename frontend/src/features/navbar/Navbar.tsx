import { useEffect } from "react";
import { Link } from "react-router";

export default function Navbar() {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const openDetails = document.querySelectorAll('details[open]');

      openDetails.forEach(details => {
        // Facem type assertion pentru target ca Node
        const target = event.target as Node;
        if (!details.contains(target)) {
          details.removeAttribute('open');
        }
      });
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="md:container h-20 mx-auto flex items-center justify-between bg-green-secondary-rgb rounded-full mt-11 text-white px-4">
      {/* Mobile Menu */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-green-secondary text-white">
            <li><Link to={"programe"}>Programe</Link></li>
            <li><a>Profesori</a></li>
            <li>
              <details>
                <summary>Despre Noi</summary>
                <ul className="p-2">
                  <li><a>Blog</a></li>
                  <li><Link to="/despre-noi">Despre Noi</Link></li>
                  <li><Link to="/curs">Curs</Link></li>
                </ul>
              </details>
            </li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
            <li><a>Înregistrează-Te</a></li>
          </ul>
        </div>
      </div>

      {/* Desktop Left Menu */}
      <div className="hidden lg:flex z-20">
        <ul className="menu menu-horizontal px-1 text-lg xl:gap-8">
          <li><Link to={"programe"}>Programe</Link></li>
          <li><a>Profesori</a></li>
          <li>
            <details>
              <summary>Despre Noi</summary>
              <ul className="p-2 bg-green-secondary">
                <li><a>Blog</a></li>
                <li><Link to="/despre-noi">Despre Noi</Link></li>
                <li><Link to="/curs">Curs</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Logo center */}
      <div className="navbar-center px-2 xl:px-10">
        <Link to={"/"} className="btn btn-ghost hover:bg-transparent p-0 mb-4">
          <img src="./images/armonia.png" alt="Armonia Logo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Right Menu */}
      <div className="hidden lg:flex gap-0 xl:gap-8 items-center text-lg">
        <ul className="menu menu-horizontal px-0 text-lg xl:gap-8">
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
        <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 relative">
          <img src="./images/inregistreaza-te.png" alt="" />
          <div className="absolute mr-6 mt-2">Înregistrează-Te</div>
        </a>
      </div>
    </div>
  );
}
