'use client'
import Modal from '@/components/helper/Modal'
import { galleryItems } from '@/db/people'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const PeopleId = () => {

    const { id } = useParams()

    return (
        <Modal>
            <div className="bg-white p-3 rounded-2xl text-black">
                {galleryItems[Number(id)] ? (
                    <div className="w-72 sm:w-96 mx-auto">
                        <Image
                            src={galleryItems[Number(id)].img}
                            alt={galleryItems[Number(id)].title}
                            className="w-full h-auto rounded-xl"
                        />
                        <h2 className="text-2xl font-semibold mt-4">{galleryItems[Number(id)].title}</h2>
                        <p className="mt-2 text-gray-700">{galleryItems[Number(id)].description}</p>
                    </div>
                ) : (
                    <p>Item not found</p>
                )}
            </div>
        </Modal>
    )
}

export default PeopleId