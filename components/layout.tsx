import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer';


const noto = Noto_Sans_Mono({ subsets: ['latin']})

function Layout({children} : any) {
  
    return (
        <main
        className={`flex min-h-screen flex-col justify-between items-center ${noto.className}`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </main>
    );
}

export default Layout;