import Link from "next/link";

const Navbar = () => {
  return (
    <nav id="navbar" className="flexCenter">
      <div className="p-x py-10 max-sm:py-4 max-container flexBetween absolute w-full top-0 z-10">
        <img src="/logo.png" alt="logo" className="w-32 cursor-pointer" />
        <div className=" text-white flexRow gap-10 flexCenter text-p-4 max-md:hidden">
          <ul className=" flexCenter gap-10">
            <li className=" after:block after:bg-primary-green after:h-[2px] hover:after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300">
              <Link href="/">Places</Link>
            </li>
            <li className=" after:block after:bg-primary-green after:h-[2px] hover:after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300">
              <Link href="/">About</Link>
            </li>
            <li className=" after:block after:bg-primary-green after:h-[2px] hover:after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300">
              <Link href="/">Blog</Link>
            </li>
            <li className=" after:block after:bg-primary-green after:h-[2px] hover:after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <button className="btn-trans border-white border-2">
            Take a Trip
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
