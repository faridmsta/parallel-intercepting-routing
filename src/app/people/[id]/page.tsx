'use client'
import { galleryItems } from '@/db/people'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const PeopleId = () => {

    const { id } = useParams()

    return (
        <div className="max-w-6xl mx-auto px-6 text-sm flex justify-between">
            {galleryItems[Number(id)] ? (
                <div className=" flex gap-10">
                    <Image
                        src={galleryItems[Number(id)].img}
                        alt={galleryItems[Number(id)].title}
                        className="w-full h-auto rounded-xl max-w-[300px]"
                    />
                    <div className="">

                    <h2 className="text-2xl font-semibold mt-4">{galleryItems[Number(id)].title}</h2>
                    <p className="mt-2 text-gray-700">{galleryItems[Number(id)].description}</p>
                    </div>
                </div>
            ) : (
                <p>Item not found</p>
            )}
        </div>
    )
}

export default PeopleId