import React from 'react';
import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from './navbar';
import Link from 'next/link';

const noto = Noto_Sans_Mono({ subsets: ['latin']})

function adminLayout({children}:any) {
    return (
        <main
        className={`flex min-h-screen flex-col justify-between items-center bg-white ${noto.className}`}
      >
      <Navbar></Navbar>
        <div className='w-screen h-screen flex flex-row'>
            <aside className='bg-sky-900 p-4 text-white'> 
                <nav className='flex flex-col px-4'>
                <Link href={'/admin/projects'} className='pa-4 hover:bg-white hover:text-sky-900'>
                    Projects
                </Link>
                <Link href={'/admin/books'}>
                    Books
                </Link>
                <Link href={'/admin/courses'}>
                    Courses
                </Link>
                </nav>
             
            </aside>
        </div>
        </main>
    );
}

export default adminLayout;