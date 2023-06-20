import Image from "next/image";
import logo from '../public/logo-abol.png'

function Navbar() {
    return (
        <div className="h-16 flex flex-row items-center justify-between w-full">
            <div className="w-32">
            <Image src={logo} alt={'abolfazlmarzban'} className="h-4/5 w-auto"></Image>
            </div>
            <div>
                <ul >
                    <li>Projects</li>
                    <li>Courses</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;