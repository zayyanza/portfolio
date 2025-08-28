import React from 'react'
// import me from '../assets/me.png'

function Header() {
    return (
        <div className='pt-20 ' id='about'>
            <div className="flex justify-between container text-center">
                <div className='flex flex-col items-start gap-4'>
                    <h4 className='text-2xl'>Hello I'm</h4>
                    <h1 className=''>Zayyan</h1>
                    <h4 className='text-2xl'>Full Stack Web Developer | React, Flutter, Laravel</h4>
                </div>


                {/* <div className='w-40 h-50 bg-linear-to-b from-primary to-transparent rounded-t-[12rem]'>
                    <img src={me} alt="" className='' />
                </div> */}
            </div>
        </div>
    )
}

export default Header