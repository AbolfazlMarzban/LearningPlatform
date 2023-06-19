import Image from "next/image";
import logo from '../public/logo-abol.png'

function Navbar() {
    return (
        <div>
            <Image src={logo} alt={'abolfazlmarzban'}></Image>
        </div>
    );
}

export default Navbar;