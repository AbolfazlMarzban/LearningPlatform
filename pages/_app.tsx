import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const threeScript = document.createElement("element")
    threeScript.setAttribute("id", "threeScript")
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
    // console.log('bos', document.getElementsByTagName("head")[0].appendChild(threeScript))
    return () =>{
      if(threeScript){
        threeScript.remove()
      }
    }
  }, [])
  return <Component {...pageProps} />
}
