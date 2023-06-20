import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from './navbar'


const noto = Noto_Sans_Mono({ subsets: ['latin']})

function Layout({children} : any) {
    return (
        <main
        className={`flex min-h-screen flex-col items-center ${noto.className}`}
      >
        <Navbar></Navbar>
        {children}
      </main>
    );
}

export default Layout;