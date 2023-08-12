import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'


export default function App({ Component, pageProps }: AppProps) {
  // useEffect(()=>{
  //   const threeScript = document.createElement("element")
  //   threeScript.setAttribute("id", "threeScript")
  //   threeScript.setAttribute("src", "@/public/cdnjs.cloudflare.com_ajax_libs_three.js_r134_three.min.js")
  //   // console.log('bos', document.getElementsByTagName("head")[0].appendChild(threeScript))
  //   return () =>{
  //     if(threeScript){
  //       threeScript.remove()
  //     }
  //   }
  // }, [])
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot>
}
