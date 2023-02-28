import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
const NavBar = () => {
  return (
    <nav
      className="min-h-[100vh] w-[200px] hidden md:flex flex-col items-center
        bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
    >
      <div className="p-[30px]">
        <Link href="/">
          <Image
            className=" rounded-full"
            src={logo}
            width={140}
            height={140}
            alt="Travel Blog Logo"
          ></Image>
        </Link>
      </div>
      <div className="p-[30px] -mt-16 font-semibold">
        <p>Pictogram</p>
      </div>
    </nav>
  );
};

export default NavBar;
