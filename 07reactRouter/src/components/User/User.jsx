import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {
    const {userId} = useParams();
    return (
        <>
            <h1 className='bg-gray-600 text-white text-3xl p-4'>User: {userId}</h1>
        </>
    )
}
