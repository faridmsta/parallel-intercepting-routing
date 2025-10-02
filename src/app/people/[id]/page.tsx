'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const PeopleId = () => {

    const { id } = useParams()

    return (
        <div className="max-w-6xl mx-auto px-6 text-sm flex justify-between">PeopleId : {id}</div>
    )
}

export default PeopleId