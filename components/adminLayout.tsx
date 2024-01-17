import React from 'react';
import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from './navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const noto = Noto_Sans_Mono({ subsets: ['latin']})

function AdminLayout({children}:any) {
    const router = useRouter()
    function exitUser(){
        localStorage.removeItem('abolID')
        router.push('/')
    }
    return (
        <main
        className={`flex min-h-screen flex-col justify-between items-center bg-white ${noto.className}`}
      >
      <Navbar></Navbar>
        <div className='w-full h-screen flex flex-row'>
            <aside className='bg-sky-900 text-white'> 
                <nav className='flex flex-col'>
                <Link href={'/admin/projects'} className='p-4 hover:bg-white hover:text-sky-900'>
                    Projects
                </Link>
                <Link href={'/admin/blog'} className='p-4 hover:bg-white hover:text-sky-900'>
                    Blog
                </Link>
                <Link href={'/admin/books'} className='p-4 hover:bg-white hover:text-sky-900'>
                    Books
                </Link>
                <Link href={'/admin/courses'} className='p-4 hover:bg-white hover:text-sky-900'>
                    Courses
                </Link>
                <Link href={'/admin/orders'} className='p-4 hover:bg-white hover:text-sky-900'>
                    Orders
                </Link>
                <Link href={'/admin/about'} className='p-4 hover:bg-white hover:text-sky-900'>
                    About
                </Link>
                <Link href={'/admin/contacts'} className='p-4 hover:bg-white hover:text-sky-900'>
                    Contacts
                </Link>
                <span className='p-4 hover:bg-white hover:text-sky-900 cursor-pointer' onClick={()=>exitUser()}>
                    Sign Out
                </span>
                </nav>
            </aside>
            <div className='w-full p-4 border-solid border-4 border-sky-900'>
                {children}
            </div>
        </div>
        </main>
    );
}

export default AdminLayout;