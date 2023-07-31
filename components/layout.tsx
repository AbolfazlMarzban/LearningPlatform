import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer';
import { useEffect, useRef, useState } from 'react';
import * as THREE from "three"
// @ts-ignore
import NET from "vanta/dist/vanta.net.min"

const noto = Noto_Sans_Mono({ subsets: ['latin']})

function Layout({children} : any) {
// const NET : any = require("vanta/dist/vanta.globe.min")
const [vantaEffect, setVantaEffect] : any = useState(0)
const vantaRef = useRef(null)
useEffect(()=>{
if(!vantaEffect){
  setVantaEffect(
    NET({
      el: vantaRef.current,
      THREE,
      color: 0x0,
      backgroundColor: 0xc5c5c5,
      showDots: false
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
        {children}
        <Footer></Footer>
      </main>
    );
}

export default Layout;