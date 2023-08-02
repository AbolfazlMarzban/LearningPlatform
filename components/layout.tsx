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
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
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
        <div style={{ zIndex: '10'}} className='py-5'>
        {children}
        </div>
        <Footer></Footer>
      </main>
    );
}

export default Layout;