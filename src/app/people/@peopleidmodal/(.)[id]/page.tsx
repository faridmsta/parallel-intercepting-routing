'use client'
import Modal from '@/components/helper/Modal'
import { useParams } from 'next/navigation'
import React from 'react'

const PeopleId = () => {

    const { id } = useParams()

    return (
        <Modal>
            <div className="bg-white p-3 rounded-2xl text-black">PeopleId : {id}</div>
        </Modal>
    )
}

export default PeopleId