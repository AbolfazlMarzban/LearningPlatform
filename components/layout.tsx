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

function Layout({footer, children }: any) {
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
          // highlightColor: 0xeca9f2,
          // midtoneColor: 0x93d3ed,
          // lowlightColor: 0xfc8bb2,
          // baseColor: 0x313030,
          // color: 0xddef21,
          // backgroundColor: 0x606060
          backgroundColor: 0x8082c,
          color: 0xff0505,
          minHeight: 300.00,
          minWidth: 10.00,
          scale: 1.00,
          scaleMobile: 0.7,
          size: 1.00
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
      className={`flex w-full h-screen flex-col justify-between items-center ${noto.className}`}
      ref={vantaRef}
    >
      <Navbar></Navbar>
        <div style={{ zIndex: "10" }} className="py-5 overflow-auto">
          {children}
        </div>
      <Footer footer={footer}></Footer>
    </main>
  );
}

export default Layout;
