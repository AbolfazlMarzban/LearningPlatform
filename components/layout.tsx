import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer';
import { useEffect, useRef, useState } from 'react';
import * as THREE from "three"
// @ts-ignore
import CLOUDS from "vanta/dist/vanta.clouds.min"

const noto = Noto_Sans_Mono({ subsets: ['latin']})

function Layout({children} : any) {
// const NET : any = require("vanta/dist/vanta.globe.min")
const [vantaEffect, setVantaEffect] : any = useState(0)
const vantaRef = useRef(null)
useEffect(()=>{
if(!vantaEffect){
  setVantaEffect(
    CLOUDS({
      el: vantaRef.current,
      THREE,
      // mouseControls: true,
      // touchControls: true,
      // gyroControls: false,
      // minHeight: 200.00,
      // minWidth: 200.00,
      // scale: 1.00,
      // scaleMobile: 1.00,
      // color: 0x464646
      // color: 0x0,
      // backgroundColor: 0xc5c5c5,
      // showDots: true,
      // maxDistance: 24.00,
      // spacing: 20.00,
      // points: 4.00
      // mouseControls: true,
      // touchControls: true,
      // gyroControls: false,
      // minHeight: 200.00,
      // minWidth: 200.00,
      // xOffset: 0.00,
      // yOffset: 0.00,
      // size: 2.50,
      // amplitudeFactor: 2.00
    })
  )
}
return ()=>{
  if (vantaEffect) vantaEffect.destroy()
}
}, [vantaEffect])
    return (
        <main
        className={`flex min-h-screen flex-col justify-between items-center ${noto.className}`}
        ref={vantaRef}
      >
        <Navbar></Navbar>
        <div style={{ zIndex: '10'}}>
        {children}
        </div>
        <Footer></Footer>
      </main>
    );
}

export default Layout;