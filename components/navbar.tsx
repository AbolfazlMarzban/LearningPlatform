import Image from "next/image";
import logo from '../public/logo-abol.png'

function Navbar() {
    return (
        <div className="h-16">
            <Image src={logo} alt={'abolfazlmarzban'} className="h-4/5 w-auto"></Image>
        </div>
    );
}

export default Navbar;