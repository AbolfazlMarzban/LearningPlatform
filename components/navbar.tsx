import Image from "next/image";
import logo from '../public/logo-abol.png'

function Navbar() {
    return (
        <div className="h-16 flex flex-row items-center justify-between w-full px-2">
            <div className="w-40">
            <Image src={logo} alt={'abolfazlmarzban'} className="h-4/5 w-auto"></Image>
            </div>
            <div>
                <ul className="flex flex-row gap-x-10">
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Courses</li>
                    <li>About me</li>
                    <li>Let's connect</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;