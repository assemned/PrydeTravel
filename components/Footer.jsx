import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="relative my-10 p-x flexCenter flex-col gap-16 max-md:gap-6 ">
        <div className="py-10 max-container flexBetween w-full top-0 z-10 max-sm:flexCenter">
          <img
            src="/logo-footer.png"
            alt="logo"
            className="w-32 cursor-pointer"
          />
          <div className=" text-primary-blue flexRow gap-10 flexCenter text-p-4 max-sm:hidden">
            <ul className="flexRow gap-10">
              <li>
                <Link href="/">Places</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <button className="btn-trans border-primary-blue border-2">
              Take a Trip
            </button>
          </div>
        </div>
        <div className="flexBetween w-full border-t-2 pt-8 border-t-gray-300 text-black max-xs:flex-col-reverse max-xs:gap-5">
          <a href="/" className=" text-p-3">
            copyright@ prydetravel 2023
          </a>
          <div className="flexCenter gap-6">
            <a href="/" className=" duration-300 hover:scale-125">
              <RiInstagramLine size={25} />
            </a>
            <a href="/" className=" duration-300 hover:scale-125">
              <FiLinkedin size={25} />
            </a>
            <a href="/" className=" duration-300 hover:scale-125">
              <LuFacebook size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
