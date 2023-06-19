import { Inter } from 'next/font/google'
import Navbar from './navbar'


const inter = Inter({ subsets: ['latin'] })

function Layout({children} : any) {
    return (
        <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar></Navbar>
        {children}
      </main>
    );
}

export default Layout;