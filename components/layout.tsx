import { Noto_Sans_Mono } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
// import NET from "vanta/dist/vanta.net.min"
// import FOG from "vanta/dist/vanta.fog.min"
import GLOBE from "vanta/dist/vanta.globe.min"

const noto = Noto_Sans_Mono({ subsets: ["latin"] });

function Layout({ children }: any) {
  // const NET : any = require("vanta/dist/vanta.globe.min")
  const [vantaEffect, setVantaEffect]: any = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xeca9f2,
          midtoneColor: 0x93d3ed,
          lowlightColor: 0xfc8bb2,
          baseColor: 0x313030,
          backgroundColor: 0xa394d9
          // backgroundColor: 0x0,
          // color: 0xffffff,
          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 200.00,
          // minWidth: 200.00,
          // scale: 1.00,
          // scaleMobile: 1.00,
          // points: 5.00,
          // spacing: 18.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <main
      className={`flex min-w-full min-h-screen flex-col justify-between items-center ${noto.className}`}
      ref={vantaRef}
    >
      <Navbar></Navbar>
        <div style={{ zIndex: "10" }} className="py-5">
          {children}
        </div>
      <Footer></Footer>
    </main>
  );
}

export default Layout;
