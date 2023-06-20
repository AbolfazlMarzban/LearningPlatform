import Image from "next/image";
import logo from "../public/logo-abol.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  return (
    <div className="h-16 flex flex-row items-center justify-between w-full px-2">
      <div className="w-40">
        <Image
          src={logo}
          alt={"abolfazlmarzban"}
          className="h-4/5 w-auto"
        ></Image>
      </div>
      <div>
        <ul className="flex flex-row gap-x-10">
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link href={"/about"}>About me</Link>
          </li>
          <li>
            <Link href={"/contact"}>Let's connect</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
