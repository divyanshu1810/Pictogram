import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
const NavBar = () => {
    return(
        <nav className="bg-black min-h-[100vh] w-[200px] hidden md:flex flex-col items-center">
            <div className="p-[30px]">
                <Link href="/">
                    <Image src={logo} width={140} height={140} alt="Travel Blog Logo"></Image>
                </Link>
            </div>
            <div className="p-[30px] -mt-16">
                <p>Travel Blog</p>
            </div>
        </nav>
    )
}

export default NavBar