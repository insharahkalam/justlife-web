import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center w-full px-15 h-[80px] shadow-2xl'>
                <div>
                    <Image
                        src='./Images/justlife-logo.svg' alt="logo" width={130} height={100} />
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <button className='p-2 hover:border-1 rounded-full border-gray-600 font-bold'>العربية</button>
                    <button className='p-2 hover:border-1 rounded-full border-gray-600'><Image src='./Images/flag1.svg' width={25} height={25} alt='flag1' /></button>
                    <button className='flex justify-between gap-5 border-1 border-gray-600 px-4 py-3 rounded-4xl items-center'><Image src='./Images/person.svg' width={25} height={25} alt='person' /> <Image src='./Images/hamburger-menu.svg' width={25} height={25} alt='hamburger-menu' /></button>
                </div>
            </div>

        </>
    )
}

export default Navbar