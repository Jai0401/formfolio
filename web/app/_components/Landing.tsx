import Link from 'next/link'
import React from 'react'

export default function Landing() {
  return (
    <div className='px-2 py-4 flex justify-center items-center h-screen'>
        <div>
            <div>
                <h1 className='text-center font-bold tracking-tighter text-5xl transition'>Craft Your Personalized <span className='hover:underline hover:font-mono transition'>Portfolio</span> in Seconds!</h1>
            </div>
            <div className='justify-center flex py-12'>
                <Link href='/form'>
                    <button className='bg-white hover:bg-black hover:text-white font-bold py-2 px-4 rounded-md border-black border-2 transition'>Get Started</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
