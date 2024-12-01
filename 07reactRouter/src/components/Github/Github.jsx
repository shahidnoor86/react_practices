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
            {/* <h1 className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers : {data.followers}</h1>
            <img src={data.avatar_url} alt='Git Picture' width={300} /> */}

            <div className='bg-slate-800 grid place-content-center'>
                <div className='flex gap-5'>
                    <div className='m-5 p-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4'>
                        <div>
                            <img className='rounded-lg mx-auto' src='https://images.pexels.com/photos/2649841/pexels-photo-2649841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Git Picture' />
                        </div>
                        <div className='mt-2 text-xl font-medium text-black text-left'>
                            Tiger
                            <p className='text-slate-500 text-base'>The tiger is a large cat and a member of the genus Panthera native to Asia. It has a powerful, muscular body with a large head and paws, a long tail and orange fur with black, mostly vertical stripes.</p>    
                        </div>
                    </div>
                    <div className='m-5 p-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4'>
                        <div>
                            <img className='rounded-lg mx-auto' src='https://images.pexels.com/photos/6368626/pexels-photo-6368626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Git Picture' />
                        </div>
                        <div className='mt-2 text-xl font-medium text-black text-left'>
                            Hyenas
                            <p className='text-slate-500 text-base'>Hyenas or hyaenas are feliform carnivoran mammals belonging to the family Hyaenidae. With just four extant species, it is the fifth-smallest family in the order Carnivora and one of the smallest in the class Mammalia. Despite their low diversity, hyenas are unique and vital components of most African ecosystems.</p>    
                        </div>
                    </div>
                    <div className='m-5 p-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4'>
                        <div>
                            <img className='rounded-lg mx-auto' src='https://images.pexels.com/photos/16036359/pexels-photo-16036359/free-photo-of-a-leopard-lying-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Git Picture' />
                        </div>
                        <div className='mt-2 text-xl font-medium text-black text-left'>
                            Jaguar
                            <p className='text-slate-500 text-base'>The jaguar is a large cat species and the only living member of the genus Panthera that is native to the Americas. With a body length of up to 1.85 m and a weight of up to 158 kg, it is the biggest cat species in the Americas and the third largest in the world.</p>    
                        </div>
                    </div>
                </div>
                

                <div className='m-5 p-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
                    <div>
                        <img className='size-20 rounded-full' src={data.avatar_url} alt='Git Picture' />
                    </div>
                    <div className='text-xl font-medium text-black text-left'>
                        {data.name}
                        <p className='text-slate-500 text-sm'>{data.location}</p>
                        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                    </div>
                </div>


                {/* Responsive */}
                <div className="mt-3">
                    <div className="max-w-sm md:max-w-2xl mx-auto bg-white rounded-xl overflow-hidden">
                        <div className='md:flex'>
                            <div>
                                <img className='h-48 w-full md:h-full md:w-48 object-cover' src="https://images.pexels.com/photos/1120049/pexels-photo-1120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className='p-8 text-left'>
                                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>An Awsome image</div>
                                <a href='#' className='block mt-1 text-lg font-medium text-black hover:text-blue-700'>Tiger is a <span className='bg-yellow-500 p-[2px] px-[8px]'>wild</span> animal</a>
                                <p className='mt-2 text-slate-500'>Lorem, ipsum dolor sit</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shahidnoor86')
    
    return response.json()
}
