import React from 'react';
import Link from 'next/link';
const Navbar =() => {
    return (
        <nav className='flex bg-slate-500 justify-center text-center font-bold p-6 justify-between'>
            My app 
            <ul className='flex gap-10'>
                <Link href='/'>    
                 <li>Home</li>
                </Link>
                <Link href='/myFiles'>    
                 <li>private view</li>
                </Link>
           
                <Link href='/login'>    
                 <li>Login</li>
                </Link>

                <Link href='/api'>    
                 <li>API</li>
                </Link>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Contact</a>   
                </li>
           
            </ul>
        </nav>
    );
};

export default Navbar;