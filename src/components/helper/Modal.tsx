'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react'

const Modal = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    const router = useRouter();
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = "hidden";

        return () => {
            // Unlock scroll when leaving
            document.body.style.overflow = "";
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                router.back()
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [router]);

    return (
        <section className="h-screen font-poppins w-full fixed top-0 left-0 bg-[rgba(0,0,0,.5)] z-10 flex items-center justify-center ">
            <div className="container">
                <div ref={modalRef} className={`
                p-18 bg-basic-white 
                flex flex-col gap-6 
                overflow-y-auto 
                max-h-[80vh] max-w-[884px] m-auto 
                rounded-2xl 
                hide-scrollbar ${className}`}
                >
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Modal