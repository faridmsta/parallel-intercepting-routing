import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between  font-mont">
            <h1 className="text-2xl font-bold">Gallery</h1>
            <nav className="hidden md:flex gap-6 text-sm text-slate-400">
                <Link href="#" className="hover:text-white">Home</Link>
                <Link href="/people" className="hover:text-white">People</Link>
                <Link href="#" className="hover:text-white">Contact</Link>
            </nav>
        </header>
    )
}

export default Header