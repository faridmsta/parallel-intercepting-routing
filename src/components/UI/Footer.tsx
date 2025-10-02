import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-slate-700 py-8 font-mont">
            <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex justify-between">
                <div>© {new Date().getFullYear()} My Gallery</div>
                <div>Made by Farid Mustafayev</div>
            </div>
        </footer>   
    )
}

export default Footer