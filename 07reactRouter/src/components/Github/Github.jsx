import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github(props) {

    /* const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }) */

    const data = useLoaderData();
    

    return (
        <>
            <h1 className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers : {data.followers}</h1>
            <img src={data.avatar_url} alt='Git Picture' width={300} />
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    
    return response.json()
}
